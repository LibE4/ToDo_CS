namespace ToDo_CS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changetodo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ToDoes", "Task", c => c.String());
            AddColumn("dbo.ToDoes", "AssignedTo", c => c.String());
            DropColumn("dbo.ToDoes", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ToDoes", "Name", c => c.String());
            DropColumn("dbo.ToDoes", "AssignedTo");
            DropColumn("dbo.ToDoes", "Task");
        }
    }
}
