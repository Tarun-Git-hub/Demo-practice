public with sharing class gitRepoController {
    public gitRepoController() {

    } 
    @AuraEnabled
    public static Boolean insertRepo(List<string> repoRec){
        List<Git_Repo__c> repoList=new List<Git_Repo__c>();
        if(!repoRec.isEmpty()){  
            for(String repoName:repoRec){
            repoList.add(new Git_Repo__c(Name =repoName));
        }
    }
        
        Boolean isSuccessful=false;
        try {
            if(!repoList.isEmpty()){
            insert repoList;
            }
            isSuccessful=true;
            return isSuccessful;
        } catch (Exception e) {
            //throw new AuraHandledException(e.getMessage());
            return isSuccessful;
        }
    }
}