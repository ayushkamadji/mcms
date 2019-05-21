import { EditGuesser } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import PostList from './PostList';

export default {
  icon: PostIcon,
  list: PostList,
  edit: EditGuesser,
  options: { label: 'Blogs' }
};