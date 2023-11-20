import { Post } from 'services';
import type { Props as TableProps } from '../../../components/Listing/Table';

export interface Props extends Omit<TableProps<Post>, 'columns' | 'rowKey'> {
  // Callback khi thực hiện action xóa record
  onRemove?: (record: Post) => void;
  // Callback khi thực hiện action sửa record
  onEdit?: (record: Post) => void;
}

export const Listing = ({ data }: Props) => {
  return (
    <div>
      <ul>
        {data.map(item => (
          <li className="ml-4" key={item.id}>
            - {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
