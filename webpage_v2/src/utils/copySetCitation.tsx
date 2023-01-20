export function citeCopy(event: React.ClipboardEvent<HTMLElement>, citation: string) {

    let io: boolean = false; 

    if (io) {
        return console.log("Dev mode...");
    }

    // source for general idea: https://stackoverflow.com/questions/2026335/how-to-add-extra-info-to-copied-web-text
    // event.clipboardData.setData("text/plain", event.clipboardData.getData("text/plain") + cite)
    event.clipboardData.setData("text/plain", document.getSelection() + citation)
    event.preventDefault();
}

export const cite = "\nThese tables created by ggx2ac come from: ggx2ac + archives: Nintendo earnings data and other video game companies\nsource: https://r134x7.github.io/nintendo-earnings-data-and-other-video-game-companies/"