import request from '@/utils/request';
export async function getTodoList() {
  return request('/server/api/list');
}

