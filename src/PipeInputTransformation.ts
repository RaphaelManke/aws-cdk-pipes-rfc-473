
enum reservedVariables {
  PIPES_ARN = '<aws.pipes.pipe-arn>',
  PIPES_NAME = '<aws.pipes.pipe-name>',
  PIPES_TARGET_ARN = '<aws.pipes.target-arn>',
  PIPE_EVENT_INGESTION_TIME = '<aws.pipes.event.ingestion-time>',
  PIPE_EVENT = '<aws.pipes.event>',
  PIPE_EVENT_JSON = '<aws.pipes.event.json>',
}

type StaticString = string;
// type JsonPath = `<$.${string}>`;
type KeyValue = Record<string, string | reservedVariables>;
type StaticJsonFlat = Record<string, StaticString | KeyValue>;
type InputTransformJson = Record<
string,
StaticString | KeyValue | StaticJsonFlat
>;

type PipeInputTransformationValue = StaticString | InputTransformJson;

export interface IInputTransformationProps {
  inputTemplate: PipeInputTransformationValue;
}

export class PipeInputTransformation {
  static fromJson(inputTemplate: Record<string, any>): PipeInputTransformation {
    return new PipeInputTransformation({ inputTemplate });
  }

  readonly inputTemplate: string;

  constructor(props: IInputTransformationProps) {
    this.inputTemplate = JSON.stringify(props);
  }
}
