using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Lambda.Core;

using SamServerLess.Entities;
using Amazon.DynamoDBv2.DocumentModel;

namespace SamServerLess.Controllers
{
    [Route("api/[controller]")]
    public class MembersController : ControllerBase
    {
        private readonly IAmazonDynamoDB client;
        private readonly DynamoDBContext context;

        public MembersController(IAmazonDynamoDB client)
        {
            this.client = client;
            this.context = new DynamoDBContext(client);
        }
        [HttpGet]
        public async Task<ObjectResult> GetMembers()
        {
            List<Member> members = await GetAllMember();
            return Ok(members);
        }
        public async Task<List<Member>> GetAllMember()
        {
            ScanFilter filter = new ScanFilter();
            filter.AddCondition("name", ScanOperator.IsNotNull);
            ScanOperationConfig scanConfig = new ScanOperationConfig
            {
              Filter = filter
            };
            var queryResult = await context.FromScanAsync<Member>(scanConfig).GetRemainingAsync();
            return queryResult;
        }
        [HttpPost]
        public async Task<ObjectResult> SaveMembers([FromBody] List<Member> members)
        {
      
            try {

                List<Member> oldmembers = await GetAllMember();
                foreach (var member in oldmembers)
                {
                    await context.DeleteAsync<Member>(member);
                    LambdaLogger.Log(member.ToString());
                }
                foreach (var member in members)
                {
                    await context.SaveAsync<Member>(member);
                    LambdaLogger.Log(member.ToString());
                }
                return Ok("Saved!");
            } catch(Exception ex)
            {
                return BadRequest(ex);
            }
            
        }
    }
}
