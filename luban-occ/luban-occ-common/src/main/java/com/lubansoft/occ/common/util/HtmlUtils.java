package com.lubansoft.occ.common.util;

import org.springframework.stereotype.Component;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
@Component
public class HtmlUtils {

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
    public static String replaceHtmlTag(String str, String tag, String tagAttrib,String startTag) {
        String regxpForTag = "<\\s*" + tag + "\\s+([^>]*)\\s*" ;
        String regxpForTagAttrib = tagAttrib + "=\"http://192.168.3.103:8081/pdsdoc([^\"]+)\"" ;
        Pattern patternForTag = Pattern.compile (regxpForTag,Pattern.CASE_INSENSITIVE );
        Pattern patternForAttrib = Pattern.compile (regxpForTagAttrib,Pattern.CASE_INSENSITIVE );
        Matcher matcherForTag = patternForTag.matcher(str);
        StringBuffer sb = new StringBuffer();
        boolean result = matcherForTag.find();
        while (result) {
            StringBuffer sbreplace = new StringBuffer( "<"+tag+" ");
            Matcher matcherForAttrib = patternForAttrib.matcher(matcherForTag.group(1));
            if (matcherForAttrib.find()) {
                matcherForAttrib.appendReplacement(sbreplace, "src=\"AAAAAA\"" + "\"");
            }
            matcherForAttrib.appendTail(sbreplace);
            matcherForTag.appendReplacement(sb, sbreplace.toString());
            result = matcherForTag.find();
        }
        matcherForTag.appendTail(sb);
        return sb.toString();
    }

    public static void main(String[] args) {
        StringBuffer content = new StringBuffer();
        content.append("<ul class=\"imgBox\"><li><img id=\"160424\" src=\"http://192.168.3.103:8081/pdsdoc/downloadSystemFile/adfasdfasdfasdfsdf\" class=\"src_class\"></li>");
        content.append("<li><img id=\"150628\" src=\"http://192.168.3.103:8081/pdsdoc/downloadSystemFile/adfasdfasdfasdfsdf\" class=\"src_class\"></li></ul>");
        System.out.println("原始字符串为:"+content.toString());
        String newStr = replaceHtmlTag(content.toString(), "img", "src", "src=\"http://192.168.3.103:8081/pdsdoc/");
        System.out.println("       替换后为:"+newStr);
    }

}
