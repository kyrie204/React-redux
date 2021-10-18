import React, { useState, useEffect } from 'react';
import { Checkbox, Card, Space, Button } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = (props) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={false}
      startingLineNumber={0}
      language={props.lang}
      style={vscDarkPlus}
      lineNumberStyle={{ color: '#ddd', fontSize: 14 }}
      wrapLines={true}
      lineProps={(num) => {
        // console.log(num);
        return {};
      }}
      className={vscDarkPlus}
    >
      {props.children.replace(/^\s+|\s+$/g, '')}
    </SyntaxHighlighter>
  );
};

export default function HighLighter() {
  const testjson = JSON.stringify({ a: 1, b: 2 });
  const [state, setstate] = useState(testjson);

  const parse2 = () => {
    setstate((pre) => {
      let temp = JSON.parse(pre);
      temp[Math.ceil(Math.random() * 100)] = (Math.random() * 10).toFixed(2);

      return JSON.stringify({ ...temp }, null, 2);
      // return toparse({ ...temp });
    });
  };
  const toparse = (json) => {
    var rep = '~';
    var jsonStr = JSON.stringify(json, null, rep);
    var str = '';
    for (var i = 0; i < jsonStr.length; i++) {
      var text2 = jsonStr.charAt(i);
      if (i > 1) {
        var text = jsonStr.charAt(i - 1);
        if (rep != text && rep == text2) {
          // str += '<br/>';
          str += '';
        }
      }
      str += text2;
    }
    jsonStr = '';
    for (var i = 0; i < str.length; i++) {
      var text = str.charAt(i);
      // if (rep == text) jsonStr += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      if (rep == text) jsonStr += '  ';
      else {
        jsonStr += text;
      }
      if (i == str.length - 2) jsonStr += '';
      // if (i == str.length - 2) jsonStr += '<br/>';
    }
    return jsonStr;
  };

  useEffect(() => {
    parse2();
  }, []);

  return (
    <div>
      <div>
        <Space>
          <Button type="primary" onClick={parse2}>
            parse2
          </Button>
        </Space>
      </div>
      <Space align="start">
        <Code lang="js">
          {`function test(){
              console.log(test)
          }`}
        </Code>
        <Code lang="json">{state}</Code>
        <div>
          <pre>{state}</pre>
        </div>
      </Space>
    </div>
  );
}
