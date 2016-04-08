USE [WLSReporting]
GO
/****** Object:  Trigger [dbo].[insLog_tReportSchedule]    Script Date: 4/7/2016 2:13:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Caleb
-- Create date: 4/7/2016
-- Description:	Logs Inserts for tReportSchedule to tReportSchedule_Log
-- =============================================
ALTER TRIGGER [dbo].[insLog_tReportSchedule] 
   ON  [dbo].[tReportSchedule] 
   FOR INSERT
AS 
BEGIN

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'Report', Cast([Report] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'ReportName', Cast([ReportName] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'ScheduleTime', Cast([ScheduleTime] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'SPName', Cast([SPName] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'Parameters', Cast([Parameters] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'IsActive', Cast([IsActive] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'DestinationPath', Cast([DestinationPath] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'ExportFormat', Cast([ExportFormat] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'Header', Cast([Header] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'LastRunAt', Cast([LastRunAt] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'OnDemand', Cast([OnDemand] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'Custodian', Cast([Custodian] as varchar(7000)) FROM INSERTED

INSERT INTO tReportSchedule_Log(LogAction, PKID, PKID_Name, DBField, ChangedTo)
SELECT 'i', Reportid, 'Reportid', 'Filename', Cast([Filename] as varchar(7000)) FROM INSERTED

END