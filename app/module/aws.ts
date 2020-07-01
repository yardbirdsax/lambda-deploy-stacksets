import { CloudFormation } from "aws-sdk";

class stackset {

  static async deploy(templateUrl:string, parameters:{ [key: string]: string}) {
    const cloudformation = new CloudFormation();


  }

}

export { stackset }