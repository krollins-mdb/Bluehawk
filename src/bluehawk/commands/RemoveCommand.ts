import {
  makeBlockOrLineCommand,
  NoAttributes,
  NoAttributesSchema,
} from "./Command";

export const RemoveCommand = makeBlockOrLineCommand<NoAttributes>({
  name: "remove",
  attributesSchema: NoAttributesSchema,
  process({ commandNode, parseResult }) {
    const { lineRange } = commandNode;
    parseResult.source.text.remove(
      lineRange.start.offset,
      lineRange.end.offset
    );
  },
});
