export interface WriterConfig {
  transform?: <T>(data: T) => any,
}