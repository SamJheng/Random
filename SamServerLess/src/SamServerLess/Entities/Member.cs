using Amazon.DynamoDBv2.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SamServerLess.Entities
{
  /// <summary>
  /// Map the Book Class to DynamoDb Table
  /// To learn more visit https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DeclarativeTagsList.html
  /// </summary>
  [DynamoDBTable("MembersData")]
    public class Member
    {
        [DynamoDBHashKey] //Partition key
        public Guid id { get; set; }
        [DynamoDBProperty]
        public int index { get; set; }
        [DynamoDBProperty]
        public string name { get; set; }
        [DynamoDBProperty]
        public int rewardId { get; set; }
    }
}
