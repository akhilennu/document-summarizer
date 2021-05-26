export const PROJECT_SUMMARY =
"Copy and paste contents from any wikipedia page or any site to get it's summary in {size} sentences. You can also experiment by changing the size in the input field for size.\n\nProject Summary:\nThis is a rule based document summarizer. It gets the most frequent words in the document and sets a score to each sentence by the words that are most frequent. \n\nThe sentence with most frequent words will be the first chosen sentence. {size} number of sentences will be chosen and then ordered and given as summary."

export const DEFAULT_SIZE = 10

export const BACKEND_API = "https://ae-document-summarizer.herokuapp.com/summarize" 

export const ERROR_MESSAGE ="SOMETHING WENT WRONG PLEASE TRY A DIFFERENT SENTENCE. PLEASE CONTACT AKHIL IF THE ISSUE PERSISTS"

export const MINSIZE = 1
export const MAXSIZE = 20

export const SIZE_HELPER_MESSAGE ="Please enter a value between "+MINSIZE+" and "+MAXSIZE