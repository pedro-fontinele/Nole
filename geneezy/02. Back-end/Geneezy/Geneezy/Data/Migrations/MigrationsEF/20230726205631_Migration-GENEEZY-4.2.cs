using Microsoft.EntityFrameworkCore.Migrations;

namespace Geneezy.Migrations
{
    public partial class MigrationGENEEZY42 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentCategoryName",
                table: "Category");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ParentCategoryName",
                table: "Category",
                type: "TEXT",
                nullable: true);
        }
    }
}
