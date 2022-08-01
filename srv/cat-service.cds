using { zui_norris as apple } from '../db/data-model';

service CatalogService@(path:'/CatalogService')
{
    entity UserInfo as projection on apple.UserInfo
    entity UserAccess as projection on apple.UserAccess;
    // entity ProjectInfo as projection on apple.ProjectID;
    entity Section as projection on apple.Section;
    entity Qus_Head as projection on apple.Qus_Head;
    entity Qus_Map as projection on apple.Qus_Map;
    entity QnType_Priority as projection on apple.QnType_Priority;
    entity Category as projection on apple.Category;
    entity StatusCode as projection on apple.StatusCode;
    entity Systems as projection on apple.Systems;
    entity Phases as projection on apple.Phases;
    entity Company as projection on apple.Company;
    entity Issue as projection on apple.Issue;
    entity Admin as projection on apple.Admin;
}