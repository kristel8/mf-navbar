export interface RequestApproval {
    raid?:number;
	operationType:number;
	moduleType:number;
	content:string;
	requestDate?:string;
	approvalDate?:string;
	commentreq:string;
	coduserreq:string;
	commentsup?:string;
	codusersup?:string;
	approval?:number;
	notification?:number;
	appcurrent?:string;
}