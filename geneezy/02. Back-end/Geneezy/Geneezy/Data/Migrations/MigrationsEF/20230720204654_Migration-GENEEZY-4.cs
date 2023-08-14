using Microsoft.EntityFrameworkCore.Migrations;

namespace Geneezy.Migrations
{
    public partial class MigrationGENEEZY4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<uint>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    ParentCategoryId = table.Column<uint>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    Id = table.Column<uint>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CompanyName = table.Column<string>(type: "TEXT", nullable: true),
                    CorporateSocialName = table.Column<string>(type: "TEXT", nullable: true),
                    Telephone = table.Column<ulong>(type: "INTEGER", nullable: false),
                    Mail = table.Column<string>(type: "TEXT", nullable: true),
                    CNPJ = table.Column<ulong>(type: "INTEGER", nullable: false),
                    isActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    BusinessSegment = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfFoundation = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfRegister = table.Column<string>(type: "TEXT", nullable: true),
                    Country = table.Column<string>(type: "TEXT", nullable: true),
                    State = table.Column<string>(type: "TEXT", nullable: true),
                    City = table.Column<string>(type: "TEXT", nullable: true),
                    Neighborhood = table.Column<string>(type: "TEXT", nullable: true),
                    Street = table.Column<string>(type: "TEXT", nullable: true),
                    ResidentialNumber = table.Column<uint>(type: "INTEGER", nullable: false),
                    ComplementAddress = table.Column<string>(type: "TEXT", nullable: true),
                    CEP = table.Column<uint>(type: "INTEGER", nullable: false),
                    Observation = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    Id = table.Column<uint>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    Brand = table.Column<string>(type: "TEXT", nullable: true),
                    Category = table.Column<string>(type: "TEXT", nullable: true),
                    Supplier = table.Column<string>(type: "TEXT", nullable: true),
                    Sku = table.Column<string>(type: "TEXT", nullable: true),
                    Weight = table.Column<decimal>(type: "TEXT", nullable: false),
                    Height = table.Column<decimal>(type: "TEXT", nullable: false),
                    Width = table.Column<decimal>(type: "TEXT", nullable: false),
                    Length = table.Column<decimal>(type: "TEXT", nullable: false),
                    Ean = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Supplier",
                columns: table => new
                {
                    Id = table.Column<uint>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CompanyName = table.Column<string>(type: "TEXT", nullable: true),
                    CorporateSocialName = table.Column<string>(type: "TEXT", nullable: true),
                    Telephone = table.Column<ulong>(type: "INTEGER", nullable: false),
                    Mail = table.Column<string>(type: "TEXT", nullable: true),
                    CNPJ = table.Column<ulong>(type: "INTEGER", nullable: false),
                    isActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    BusinessSegment = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfFoundation = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfRegister = table.Column<string>(type: "TEXT", nullable: true),
                    Country = table.Column<string>(type: "TEXT", nullable: true),
                    State = table.Column<string>(type: "TEXT", nullable: true),
                    City = table.Column<string>(type: "TEXT", nullable: true),
                    Neighborhood = table.Column<string>(type: "TEXT", nullable: true),
                    Street = table.Column<string>(type: "TEXT", nullable: true),
                    ResidentialNumber = table.Column<uint>(type: "INTEGER", nullable: false),
                    ComplementAddress = table.Column<string>(type: "TEXT", nullable: true),
                    CEP = table.Column<uint>(type: "INTEGER", nullable: false),
                    Observation = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Supplier", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    Id = table.Column<uint>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    LastName = table.Column<string>(type: "TEXT", nullable: true),
                    CPF = table.Column<ulong>(type: "INTEGER", nullable: false),
                    DateOfBirth = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfRegister = table.Column<string>(type: "TEXT", nullable: true),
                    isActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    isBusiness = table.Column<bool>(type: "INTEGER", nullable: false),
                    CustomerId = table.Column<uint>(type: "INTEGER", nullable: false),
                    PositionInTheCompany = table.Column<string>(type: "TEXT", nullable: true),
                    Telephone = table.Column<ulong>(type: "INTEGER", nullable: false),
                    Mail = table.Column<string>(type: "TEXT", nullable: true),
                    Sex = table.Column<char>(type: "TEXT", nullable: false),
                    Country = table.Column<string>(type: "TEXT", nullable: true),
                    State = table.Column<string>(type: "TEXT", nullable: true),
                    City = table.Column<string>(type: "TEXT", nullable: true),
                    Neighborhood = table.Column<string>(type: "TEXT", nullable: true),
                    Street = table.Column<string>(type: "TEXT", nullable: true),
                    ResidentialNumber = table.Column<uint>(type: "INTEGER", nullable: false),
                    ComplementAddress = table.Column<string>(type: "TEXT", nullable: true),
                    CEP = table.Column<uint>(type: "INTEGER", nullable: false),
                    Observation = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Client_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Person",
                columns: table => new
                {
                    Id = table.Column<uint>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    LastName = table.Column<string>(type: "TEXT", nullable: true),
                    CPF = table.Column<ulong>(type: "INTEGER", nullable: false),
                    DateOfBirth = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfRegister = table.Column<string>(type: "TEXT", nullable: true),
                    isActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    Telephone = table.Column<ulong>(type: "INTEGER", nullable: false),
                    Mail = table.Column<string>(type: "TEXT", nullable: true),
                    Sex = table.Column<char>(type: "TEXT", nullable: false),
                    Observation = table.Column<string>(type: "TEXT", nullable: true),
                    SupplierId = table.Column<uint>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Person_Supplier_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Supplier",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Client_CustomerId",
                table: "Client",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Person_SupplierId",
                table: "Person",
                column: "SupplierId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "Person");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Supplier");
        }
    }
}
