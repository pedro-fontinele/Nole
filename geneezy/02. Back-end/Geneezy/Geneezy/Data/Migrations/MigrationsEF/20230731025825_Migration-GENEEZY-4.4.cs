using Microsoft.EntityFrameworkCore.Migrations;

namespace Geneezy.Migrations
{
    public partial class MigrationGENEEZY44 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "ParentCategoryName",
                table: "Category");

            migrationBuilder.AddColumn<uint>(
                name: "CategoryId",
                table: "Product",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0u);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Product");

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Product",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ParentCategoryName",
                table: "Category",
                type: "TEXT",
                nullable: true);
        }
    }
}
