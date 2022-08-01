namespace zui_norris;

type statustype : String enum {
    Open;
    InReview;
    Closed;
}

type state : String enum {
    Error;
    Information;
    None;
    Success;
    Warning;
}


type type : String enum {
    General;
    Object;
}

// Central data entites 

entity UserInfo {
@title : 'User is Mandatory for CRC'
key UserIsMandatoryforCRC : String;
@title : 'SAP User ID'
key   SAPUserID             : String;
@title : 'User Name'
    UserName              : String;
@title : 'Email ID'
    EmailID               : String;
@title : 'Company Name'   
    CompanyName           : String;
@title : 'Manager Name'
    ManagerName           : String;
@title : 'Admin'    
    Admin                 : String;
}

entity UserAccess {
    key SAPUserID        : String;
    key SystemDev        : String;
        DeveloperAccess  : Boolean;
        L1ReviewerAccess : Boolean;
        L2ReviewerAccess : Boolean;
        // DeveloperAccess  : String;
        // L1ReviewerAccess : String;
        // L2ReviewerAccess : String;
        touser           : Association to UserInfo
                               on touser.SAPUserID = SAPUserID
}

// entity ProjectID {
//     key RTR                    : String;
//         ProjectID              : String;
//         Type                   : String;
//         TypeMandatoryCRC       : String;
//         ProjectMandatoryforCRC : String;
//         RTRforCRCMandatory     : String;
//         CRCExcludeJustification : String;
// }

entity Section {
    key SectionNo       : String;
    key SectionName     : String;
        SectionPriority : String;
        Type            : type;
        ObjectType      : String;
        toquestionno    : Association to many Qus_Map
                              on toquestionno.SectionNn = SectionNo;
}

entity Qus_Head {
    key QuestionNo       : String;
        Question         : String;
        QuestionPriority : String;
}

entity Qus_Map {
    key QuestionNo : String;
        SectionNn  : String;
        toquestion : Association to Qus_Head
                         on toquestion.QuestionNo = QuestionNo;
        tosection  : Association to Section
                         on tosection.SectionNo = SectionNn;
}

entity QnType_Priority {
    key Type      : String;
        Priority  : String;
        Sectionno : String;
        tosection : Association to many Section
                        on  tosection.SectionNo = Sectionno
                        and tosection.Type      = 'Object';
}

// Dropdown values

entity StatusCode {
    key statuscode : Integer;
        statustext : String;
        statustype : statustype;
        state      : state;
}

entity Systems {
    key SystemID : String;
}

//
entity Phases {
    key Phase       : String;
        Description : String;
}

//
entity Company {
    key CompanyName : String;
        Description : String;
}

//
entity Issue {
    key IssueType   : String;
        Description : String;
}

//
entity Category {
    key IssueCategory : String;
        Description   : String;
}

//
entity Admin  {
    key AdminUserId : String;
        AdminName   : String;
        CompanyName : String;
}