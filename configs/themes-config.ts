export type ThemeType = {
  url: string;
  hidden: boolean;
  previewImage?: string;
  title?: string;
  category?: string;
};

const themes = new Map<string, ThemeType>();

const localTheme = "http://localhost:8080";

themes.set("baseline", {
  url: "https://arweave.net/7cBcCdMZjOZzOIdcJXlLSdKvR61rnEHdYaYsXp13Jss",
  hidden: false,
  previewImage: "baseline-preview.png",
  title: "Baseline (Default)",
  category: "Gallery",
});

themes.set("lens", {
  url: "https://arweave.net/ryixUYDMbEwGtaMydWNFMAE-WPzDoX4tCQp5gcH5x-E",
  hidden: false,
  previewImage: "lens-preview.png",
  title: "Lens",
  category: "Photography",
});

themes.set("glass", {
  url: "https://arweave.net/RUqCcaDXMtyXmayUfQaLJm-vk4v1C8jT2oinFjU_5AY",
  hidden: true,
});

export default themes;
