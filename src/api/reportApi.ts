import {
  get,
  post,
  put,
  del,
  type BaseResponse,
  type PageModel,
} from "@/utils/axiosInstance";

/**
 * 请求的入参接口
 * @interface UserRequest
 */
export interface UserRequest {
  page: number;
  pageSize: number;
  key: string;
  f: string;
}

/**
 * game record item
 * @interface GameRecordItem
 */
export interface GameRecordItem {
  Status: string;
  GameLocalTime: string;
  ResultTime: string;
  Acnt: string;
  Branch: string;
  BetID: string;
  CategoryId: number;
  GameCategoryName: string;
  GamePlatform: string;
  GameName: string;
  BetAmount: number;
  NetWin: number;
  Turnover: number;
  Payout: number;
}

/** 获取业务数据列表 */
export const getGameRecordApi = async (
  params: UserRequest
): Promise<BaseResponse<PageModel<GameRecordItem>>> => {
  try {
    const response = await get<BaseResponse<PageModel<GameRecordItem>>>(
      "/api/Record/GetGameRecord",
      params
    );
    return response;
  } catch (error) {
    throw new Error("请求失败");
  }
};

// 新增业务数据
export const addUser = async (params: GameRecordItem): Promise<BaseResponse<string>> => {
  try {
    const response = await post<BaseResponse<string>>("/api/user/post", params);
    return response;
  } catch (error) {
    throw new Error("请求失败");
  }
};

// 编辑业务数据
export const editUser = async (params: GameRecordItem): Promise<BaseResponse<string>> => {
  try {
    const response = await put<BaseResponse<string>>("/api/user/put", params);
    return response;
  } catch (error) {
    throw new Error("请求失败");
  }
};

// 删除业务数据
export const removeUser = async (id: string): Promise<BaseResponse<string>> => {
  try {
    const response = await del<BaseResponse<string>>("/api/user/delete", {
      id: id,
    });
    return response;
  } catch (error) {
    throw new Error("请求失败");
  }
};
