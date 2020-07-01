// import { stackset } from "./aws";
import * as AWSMock from 'aws-sdk-mock';
import * as AWS from 'aws-sdk';
import { ListStackSetsInput } from "aws-sdk/clients/cloudformation";

beforeAll(async (done) => {
  done();
});

describe("AWS Utility Module", () => {

  const expected = [{StackSetName: "StackSet"}];

  it("should mock the listStackSets method", async () => {
    AWSMock.setSDKInstance(AWS);
    AWSMock.mock('CloudFormation','listStackSets', (params: ListStackSetsInput, callback: Function) => {
      console.info('Called listStackSets');
      if (!callback) {
        return new Promise((resolve => {
          resolve(expected);
        }));
      }
      else {
        callback(null,expected);
      }
      console.debug(params);
    });
    const cf = new AWS.CloudFormation();
    const actual = await cf.listStackSets().promise();
    expect(actual).toStrictEqual(expected);

    AWSMock.restore('CloudFormation');
  });

  

});