package com.lubansoft.occ.common.util;

import java.util.List;

/**
 * @author zhangyapo
 * @date 2019/2/28 14:54
 */
public class PageUtils {
    /**
     *      内存中进行分页
     *  * @currPageNo  页面传入的页号，从一开始
     *  * @pageSize    每页记录数
     *  
     */
    public static <T> QueryResult<T> getPagingResult(List<T> list, Integer currPageNo, Integer pageSize) {
        QueryResult<T> resultDate = new QueryResult<>();
        if (list.isEmpty()) {
            resultDate.setTotalCount(0L);
            return resultDate;
        }

        int totalRowNum = list.size();
        int totalPageNum = (totalRowNum - 1) / pageSize + 1;

        int realPageNo = currPageNo;
        if (currPageNo > totalPageNum) {
            realPageNo = totalPageNum;
        } else if (currPageNo < 1) {
            realPageNo = 1;
        }

        int fromIdx = (realPageNo - 1) * pageSize;
        int toIdx = realPageNo * pageSize ;

        if (realPageNo == totalPageNum && totalPageNum * pageSize > totalRowNum) {
            toIdx = totalRowNum ;
        }

        List<T> result = list.subList(fromIdx, toIdx);
        resultDate.setResult(result);
        resultDate.setTotalCount((long) totalRowNum);
        return resultDate;
    }
}
