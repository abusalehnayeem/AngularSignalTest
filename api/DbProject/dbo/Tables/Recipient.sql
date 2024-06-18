CREATE TABLE [dbo].[Recipient] (
    [Id]       INT           IDENTITY (1, 1) NOT NULL,
    [UserName] NVARCHAR (50) NULL,
    CONSTRAINT [PK_Recipient] PRIMARY KEY CLUSTERED ([Id] ASC)
);

