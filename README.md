# 資料結構筆記

用互動範例和小練習複習堆疊、佇列與中序轉後序。專案的開發規則在 [AGENTS.md](AGENTS.md)。

## 在電腦上查看

解壓縮後，雙擊 `index.html`。首頁的示範可逐步查看 `A + B * C` 如何轉成 `A B C * +`。三個課程頁各有一道可展開解答的練習。

## 發布至 GitHub Pages

1. 在自己的 GitHub 帳號建立公開儲存庫，名稱可用 `ds-notes`。
2. 在儲存庫選 **Add file → Upload files**，拖入解壓縮後的 `index.html`、`AGENTS.md`、`README.md`、`assets/` 和 `lessons/`，然後提交到預設分支。確認 `index.html` 位於儲存庫最上層。
3. 進入 **Settings → Pages**，在 **Source** 選 **Deploy from a branch**，分支選 `main`（或你的預設分支），資料夾選 `/(root)`，再按 **Save**。
4. 等待部署完成後，從 **Settings → Pages** 複製實際網站網址。用無痕視窗開啟該網址，確認老師可直接瀏覽。
5. 在儲存庫打開 `AGENTS.md`，複製該檔案的網址，連同儲存庫與網站網址一起填入下方繳交文字。

[GitHub 官方說明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 繳交文字草稿

將方括號中的資料替換後，貼到作業系統。

**繳交標題**  
[學校] [學號] [系級] [姓名] 資料結構筆記

1. **專案簡介**  
   我做了一個繁體中文的資料結構複習網站，內容包含堆疊、佇列和中序轉後序。首頁把中序轉後序拆成數個操作步驟，讓讀者看到每一步的堆疊內容和後序輸出。每個課程頁也附一道小練習。
2. **GitHub Repository**  
   [貼上儲存庫網址]
3. **可瀏覽的網頁**  
   [貼上 GitHub Pages 網址]
4. **AGENTS.md**  
   [貼上儲存庫內 AGENTS.md 的網址]
5. **規則如何幫助 AI 延伸網站**  
   `AGENTS.md` 指定課程頁的結構、檔名、共用樣式和首頁連結方式。以新增佇列為例，AI 可以沿用堆疊頁的版面，換成佇列的操作規則，加入逐步排隊範例和可展開的練習解答，最後接上首頁卡片。往後要新增二元搜尋，也可以依同一套規則製作課程並檢查連結與答案。
