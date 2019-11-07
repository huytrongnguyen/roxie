export interface ReaderConfig {
  rootProperty: string,
  totalProperty?: string,
  successProperty?: string,
  messageProperty?: string,
  summaryProperty?: string,
  rawData?: any,
  keepRawData?: boolean,
  transform?: <T>(rawData: any) => T,
}