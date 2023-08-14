using Microsoft.EntityFrameworkCore.Migrations;

namespace Geneezy.Migrations
{
    public partial class MigrationGENEEZY41 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ParentCategoryName",
                table: "Category",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentCategoryName",
                table: "Category");
        }
    }
}
