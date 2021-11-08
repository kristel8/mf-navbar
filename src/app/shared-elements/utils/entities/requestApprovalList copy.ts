export interface RequestApprovalList {
	raid?:number;
	operationType?:number;
	operationTypeDesc?:string;
	moduleType?:number;
	moduleTypeDesc?:string;
	requestDate?:string;
	approvalDate?:string;
	commentreq?:string;
	coduserreq?:string;
	descuserreq?:string;
	commentsup?:string;
	codusersup?:string;
	descusersup?:string;
	approval?:number;
	approvalDesc?:string;
	notification?:number;
	appcurrent?:string;
	descappcurrent?:string;
  content? : string;
  fullName? : string
}
