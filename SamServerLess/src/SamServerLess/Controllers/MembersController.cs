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

        // GET api/books
        [HttpGet("info")]
        public string Get()
        {
            
            return "SaveMemberController";
        }
    }
}
