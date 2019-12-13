// 检查点相关
import request from '@/utils/request';
import { innerConfig } from '../../config/config';
import umiRequest from 'umi-request';
import * as Cookies from 'js-cookie';

// interface GetCheckPoint {
//     projectId?: string

// }
// 获取一份报告所有的checkpoint
export async function getCheckPoint(params: any): Promise<any> {
  return request.post('/checkPoint/getCheckPoint', { data: params });
}

// 下载checkpoint 的 csv 文件
export async function exportCheckPointCsv(params: any): Promise<any> {
  // return request.post('/export/exp
ortCheckPointCsv', { data: params });
  const auth = Cookies.get('header_auth_token');
  const res = await fetch(`/export/exportCheckPointCsv`, {
    method: 'POST',
    body: JSON.stringify(params),
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: (auth && `Bearer ${auth}`) || ''
    })
  });
  return res;
}

// 更新
export async function updateCheckPoint(params: any): Promise<any> {
  return request.post('/checkPoint/updateCheckPoint', 

method: 'post',
    data: params,
    requestType: 'form'
  });

  // if (res !== null && res.ret === 1) {
  //   return res.result;
  // }
  return res`/v1/api/update/redisCache`;
}

{ data: params });
}

// 获取新增checkPoint
interface GetNewIssue {
  appKey: string;
  reportId: number;
  module?: string;
  rules: number[];
}
export async function getNewIssue(params: GetNewIssue): Promise<any> {
  return request.post('/checkPoint/getNewIssue', { data: params });
}
// 获取一份对比报告报告所有的checkpoint
interface GetComperaCheck {
  appKey: string;
  before: number;
  after: number;
  module?: string;
  rules: number[];
}
export async function getCheckComparePoint(
  params: GetComperaCheck
): Promise<any> {
  return request.post('/checkPoint/compareCheckPoint

', { data: params });
}

// 更新issue(用于在执行忽略后(updateCheckPoint)) , 更新redis缓存接口
interface UpdateIssue {
  table: 'issue';
  id: number;
}
export async function updateIssue(params: UpdateIssue): Promise<any> {
  const urlList = {
    develop: innerConfig._backendDevelop + '/v1/api/update/redisCache',
    product: innerConfig._backendProduct + '/v1/api/update/redisCache'
  };
  const url =
    window.location.hostname === 'resourcecheck.testplus.cn'
      ? urlList.product
      : urlList.develop;

  const res: any = await umiRequest(url, {
    export async function exportCheckPointCsv(params: any): Promise<any> {
        // return request.post('/export/exportCheckPointCsv', { data: params });
        const auth = Cookies.get('header_auth_token');
        const res = await fetch(`/export/exportCheckPointCsv`, {
          method: 'POST',
          body: JSON.stringify(params),
          credentials: 'include',
          headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: (auth && `Bearer ${auth}`) || ''
          })
        });
        return res;
      }
        
