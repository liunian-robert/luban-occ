package com.lubansoft.occ.common.service;

import javax.servlet.http.HttpServletRequest;

public interface HtmlUtilsService {

    /**
     * 替换指定标签的属性和值
     * @param str 需要处理的字符串
     * @param tag 标签名称
     * @param tagAttrib 要替换的标签属性值
     * @param startTag 要匹配的内容前缀
     * @return
     * @author zhangyapo
     * @date 2019年3月27日 下午7:15:32
     */
    public String replaceHtmlTag(String str, String tag, String tagAttrib, String startTag, HttpServletRequest request)throws Exception;
}
