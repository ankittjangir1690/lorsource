/*
 * Copyright (c) 2005-2006, Luke Plant
 * All rights reserved.
 * E-mail: <L.Plant.98@cantab.net>
 * Web: http://lukeplant.me.uk/
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *      * Redistributions of source code must retain the above copyright
 *        notice, this list of conditions and the following disclaimer.
 *
 *      * Redistributions in binary form must reproduce the above
 *        copyright notice, this list of conditions and the following
 *        disclaimer in the documentation and/or other materials provided
 *        with the distribution.
 *
 *      * The name of Luke Plant may not be used to endorse or promote
 *        products derived from this software without specific prior
 *        written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Rewrite with Java language and modified for lorsource by Ildar Hizbulin 2011
 * E-mail: <hizel@vyborg.ru>
 */

package ru.org.linux.util.bbcode.tags;

import org.springframework.web.util.UriUtils;
import ru.org.linux.util.URLUtil;
import ru.org.linux.util.UtilException;
import ru.org.linux.util.bbcode.Parser;
import ru.org.linux.util.bbcode.nodes.Node;
import ru.org.linux.util.bbcode.nodes.TextNode;

import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.util.Set;

/**
 * Created by IntelliJ IDEA.
 * User: hizel
 * Date: 6/30/11
 * Time: 11:52 AM
 */
public class ImgTag extends Tag {
    public ImgTag(String name, Set<String> allowedChildren, String implicitTag, Parser parser) {
        super(name, allowedChildren, implicitTag, parser);
    }

    @Override
    public String renderNodeXhtml(Node node, Connection db) {
        StringBuilder ret = new StringBuilder();
        if (node.lengthChildren() == 0) {
            return "";
        }
        TextNode txtNode = (TextNode) node.getChildren().iterator().next();
        String imgurl = txtNode.getText();

        try {
            String fixUrl = UriUtils.encodeQuery(URLUtil.fixURL(imgurl), "UTF-8");
            ret.append("<img src=\"");
            ret.append(UriUtils.encodeQuery(fixUrl, "UTF-8"));
            ret.append("\"/>");
        } catch (UtilException ex) {
            ret.append("<s>");
            ret.append(Parser.escape(imgurl));
            ret.append("</s>");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        return ret.toString();
    }

    @Override
    public String renderNodeBBCode(Node node) {
        TextNode txtNode = (TextNode) node.getChildren().iterator().next();
        return txtNode.getText();
    }
}
