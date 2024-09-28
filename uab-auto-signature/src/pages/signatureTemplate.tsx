export function SignatureTemplate(props: Signature) {
  const { parts, global, htmlBox } = props;

  const setPartStyle = (part: SignaturePartSettings) => {
    return {
      color: part.color,
      fontSize: `${part.size}px`,
    };
  };

  if (htmlBox !== "") {
    return (
      <div
        style={{
          color: props.global.color,
          fontFamily: props.global.fontFamily,
        }}
        dangerouslySetInnerHTML={{ __html: htmlBox as string }}
      ></div>
    );
  }

  return (
    <div>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          verticalAlign: "-webkit-baseline-middle",
          fontFamily: global.fontFamily,
          color: global.color,
        }}
      >
        <tbody>
          <tr>
            <td style="padding: 0px; vertical-align: middle;">
              {parts.message.value && (
                <p
                  style={{
                    margin: "0px",
                    marginBottom: "10px",
                    lineHeight: "22px",
                    ...setPartStyle(parts.message),
                  }}
                >
                  {parts.message.value}
                </p>
              )}

              {parts.title.value && (
                <h3
                  style={{
                    margin: "0px",
                    ...setPartStyle(parts.title),
                  }}
                >
                  {parts.title.value}
                </h3>
              )}

              {parts.subtitle.value && (
                <p
                  style={{
                    margin: "0px",
                    lineHeight: "22px",
                    ...setPartStyle(parts.subtitle),
                  }}
                >
                  {parts.subtitle.value}
                </p>
              )}

              {parts.paragraph.value && (
                <p
                  style={{
                    margin: "0px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    ...setPartStyle(parts.paragraph),
                  }}
                >
                  {parts.paragraph.value}
                </p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
