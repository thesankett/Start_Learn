function slideOpen(seqId, slideId ) {
    var sequenceId = configData04.presentations[configData04.presentationIndex].sequences[seqId].id;
    navigateToSequence(sequenceId, slideId, 'swipeleft');
}

/**********canvas width js*************/
function canvasWidth() {
    if (window.innerWidth == 1080) {
        var width = "width=device-width";
        var scale = 1.0546875;
        document.querySelector('meta[name=viewport]').setAttribute('content', 'width=' + width + ',minimum-scale=1.0546875,maximum-scale=1.0546875,initial-scale=' + scale);
    }

    if (window.innerWidth == 1366) {
        var width = "width=device-width";
        var scale = 1.333984375;
        document.querySelector('meta[name=viewport]').setAttribute('content', 'width=' + width + ',minimum-scale=1.333984375,maximum-scale=1.333984375,initial-scale=' + scale);
    }

    if (window.innerWidth == 1112) {
        var width = "width=device-width";
        var scale = 1.0859375;
        document.querySelector('meta[name=viewport]').setAttribute('content', 'width=' + width + ',minimum-scale=1.0859375,maximum-scale=1.0859375,initial-scale=' + scale);
    }
}
canvasWidth();