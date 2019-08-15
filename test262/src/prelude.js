import PluralRules from "intl-pluralrules/plural-rules";

if (typeof Intl === "undefined") {
  if (typeof global === "undefined") global = window;
  global.Intl = { PluralRules };
} else {
  Intl.PluralRules = PluralRules;
}
