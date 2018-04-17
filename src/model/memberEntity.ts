export interface FullApplication {
    "id": number,
    "firstName": string,
    "surName": string,
    "referrals": Referral[]
}

export interface FullApplication1 {
    "id": number,
    "externalId": string,
    "workflowProcessId": string,
    "productId": number,
    "ssn": string,
    "firstName": string,
    "surName": string,
    "applicationDate": string,
    "applicationType": number,
    "creditDecision": number,
    "approvedTerms": {
        "amount": number
    },
    "referrals": Referral[]
}
export interface Referral
{
    "id": number,
    "applicationId": number,
    "type": number,
    "description": string,
    "timestamp": string,
    "status": number,
    "workflowProcessId": string,
    "handledBy": string,
    "handledTimestamp": string,
    "reason": string
}



