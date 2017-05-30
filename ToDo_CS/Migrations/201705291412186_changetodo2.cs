namespace ToDo_CS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changetodo2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ToDoes", "IsCompleted", c => c.Boolean(nullable: false));
            DropColumn("dbo.ToDoes", "IsComplete");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ToDoes", "IsComplete", c => c.Boolean(nullable: false));
            DropColumn("dbo.ToDoes", "IsCompleted");
        }
    }
}
