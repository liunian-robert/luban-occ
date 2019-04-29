package com.lubansoft.occ.common.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.lubansoft.occ.common.service.HtmlUtilsService;

@Component
public class HtmlUtilsServiceImpl implements HtmlUtilsService {
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
    @Override
    public String replaceHtmlTag(String str, String tag, String tagAttrib, String startTag, HttpServletRequest request) throws Exception {
        String regxpForTag = "<\\s*" + tag + "\\s+([^>]*)\\s*" ;
        String regxpForTagAttrib = tagAttrib + "=\""+startTag+"([^\"]+)\"" ;
        Pattern patternForTag = Pattern.compile (regxpForTag,Pattern.CASE_INSENSITIVE );
        Pattern patternForAttrib = Pattern.compile (regxpForTagAttrib,Pattern.CASE_INSENSITIVE );
        Matcher matcherForTag = patternForTag.matcher(str);
        StringBuffer sb = new StringBuffer();
        boolean result = matcherForTag.find();
        while (result) {
            StringBuffer sbreplace = new StringBuffer( "<"+tag+" ");
            Matcher matcherForAttrib = patternForAttrib.matcher(matcherForTag.group(1));
            if (matcherForAttrib.find()) {
                String attributeStr = matcherForAttrib.group(1);
                String [] args = attributeStr.split("/");
                List<String> uuids = new ArrayList<String>();
                uuids.add(args[2]);
                Map<String,String> urlMaps = null;//fileAddressService.getDownloadUrlsUnEncrypt(uuids,request);
                matcherForAttrib.appendReplacement(sbreplace, "src=\""+urlMaps.get(args[2])+"\"");
            }
            matcherForAttrib.appendTail(sbreplace);
            matcherForTag.appendReplacement(sb, sbreplace.toString());
            result = matcherForTag.find();
        }
        matcherForTag.appendTail(sb);
        return sb.toString();
    }
}
