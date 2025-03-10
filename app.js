const NodeMediaServer = require('node-media-server');
const { LOG_TYPES } = require('node-media-server/src/node_core_logger');

const config = {
    logType: LOG_TYPES.FFDEBUG,
    rtmp: {
        port: 1935,  // RTMP port (used for streaming)
        chunk_size: 60000,
        gop_cache: true,
        ping: 10,
        ping_timeout: 60
    },
    http: null
};


const server = new NodeMediaServer(config)

server.run()

server.on('preConnect', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] preConnect: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }

});

server.on('postConnect', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] postConnect: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }

});

server.on('doneConnect', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] doneConnect: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }

});

server.on('prePublish', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] prePublish: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }

});

server.on('postPublish', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] postPublish: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }

});

server.on('donePublish', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] donePublish: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }
});

server.on('prePlay', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] prePlay: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }

});

server.on('postPlay', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] postPlay: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }

});

server.on('donePlay', (id, streamPath, args) => {
    console.log(`[NodeMediaServer] donePlay: ${streamPath}`);
    if (args !== undefined) {
        console.log(`[NodeMediaServer] Args: ${JSON.stringify(args)}`);
    }

});


