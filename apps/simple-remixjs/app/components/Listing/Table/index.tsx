export interface Props<RecordType extends Record<string, any>> {
  data: RecordType[];
  isLoading?: boolean;
  totalRecords?: number;
  recordsPerPage?: number;
  currentPage?: number;
}
