//Masih Sikit Om//
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const brainly = require('brainly-scraper')
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const setting = JSON.parse(fs.readFileSync('./apikey/setting.json'))
const Apikey = JSON.parse(fs.readFileSync('./apikey/Apikey.json'))
//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\
const gember = fs.readFileSync("./lib/Menu7.jpg"); 
const thumb = fs.readFileSync("./media/gambar/thumb.jpg");
//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\

Lolhuman = Apikey.Lolhuman
AlphaBot = Apikey.AlphaBot
Leyscoders = Apikey.Leyscoders
ZeksKey = Apikey.ZeksKey

//━━━━━━━━━━━━━━━[  AUTO RESPON ]━━━━━━━━━━━━━━━\\

autorespon = true
autoread = true
autocomposing = true
autorecording = true
AutoRespon: true

//━━━━━━━━━━━━━━━[  PUBLIC ]━━━━━━━━━━━━━━━\\

publik = true

//━━━━━━━━━━━━━━━[EDIT DI SETTING.JSON]━━━━━━━━━━━━━━━\\

namabot = setting.BotName
namaowner = setting.OwnerName
nomorowner = setting.OwnerNumber

//━━━━━━━━━━━━━━━[ Sticker WM ]━━━━━━━━━━━━━━━\\

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif() 

//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  


module.exports = sen = async (sen, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : ',' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\
			mess = {
				daftar: `Maaf kak, kakak belum daftar menjadi user ${namabot}.\n Silahkan daftar dengan mengetik *.daftar*`,
				wait: 'MOHON TUNGGU SEBENTAR',
				banned: 'Haha sorry lu di banned... Kalo mau di lepas banned harap hubungin .owner',
				success: 'SELESAI✓',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ PENGGUNAAN DALAM GROUP!!! ❌',
					premium: 'Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan ketik .owner',
					ownerG: '❌ LU BUKAN OWNER GROUP!!! ❌',
					ownerB: '❌ LU BUKAN OWNERKU!!! ❌',
					admin: '❌ LU BUKAN ADMIN GROUP!! ❌',
					Badmin: '❌ BOT BUKAN ADMIN!!! ❌'
				}
			}
//━━━━━━━━━━━━━━━[ Terakhir ]━━━━━━━━━━━━━━━\\
			const botNumber = sen.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = sen.contacts[sender] != undefined ? sen.contacts[sender].vname || sen.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await sen.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
//━━━━━━━━━━━━━━━[ HARI HARI ]━━━━━━━━━━━━━━━\\
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			sen.sendMessage(from, teks, text, { thumbnail: gember, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} WIB - ${week}`,body:"New Base SenBotz",previewType:"PHOTO",thumbnail:gember,sourceUrl:`https://wa.me/60128422518`}}})
		}
		const reply2 = (teks) => {
sen.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
			const sendMess = (hehe, teks) => {
				sen.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? sen.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : sen.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu terdeteksi mengimkan link group, maaf saya harus ngeluarin anda :(`)
				setTimeout(() => {
				sen.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			   }
//━━━━━━━━━━━━━━━[WAKTU]━━━━━━━━━━━━━━━\\
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━\\

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `senBot`, jpegThumbnail: fs.readFileSync(`./media/gambar/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/gambar/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `${namabot} \nRp. 999.999.999`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `By Guntur P`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           sen.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/gambar/thumb.jpg"),
                                  "itemCount":100,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	sen.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	sen.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await sen.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    sen.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    sen.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await sen.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      sen.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               sen.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      sen.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      sen.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = sen.contacts[from] != undefined ? sen.contacts[from].vname || sen.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By SenBotz';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return sen.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }       
sen.updatePresence(from, Presence.composing)
//━━━━━━━━━━━━━━━[ PUBLIC ]━━━━━━━━━━━━━━━\\
if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
//━━━━━━━━━━━━━━━[ UCAPAN WAKTU ]━━━━━━━━━━━━━━━\\
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
//━━━━━━━━━━━━━━━[ FAKE MENU BOT ]━━━━━━━━━━━━━━━\\
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `New Base SenBotz`,
                 "title": `New Base SenBotz`,
                 'jpegThumbnail': fs.readFileSync("./lib/Wahyuu.jpg"),
                        }
	                  } 
                     }
//━━━━━━━━━━━━━━━[ BUAT BIO BOT ]━━━━━━━━━━━━━━━\\
runi = process.uptime() 
           sen.setStatus(`SenBotz Aktif Selama ${kyun(runi)} `).catch((_)=>_);
          settingstatus = new Date() * 1;
//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
//━━━━━━━━━━━━━━━[ TEKS BUFFER ]━━━━━━━━━━━━━━━\\
const fakeText = (teks) => {
sen.sendMessage(from, teks, text, {quoted: froxx})
}
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\

switch(command) {
case 'help':
case 'menu':
if (isBanned) return reply(mess.banned)
anu =`
𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝒅𝒂𝒕𝒂𝒏𝒈 𝒅𝒊 SenBotz 👋

❏ 𝑻𝒂𝒎𝒑𝒊𝒍𝒂𝒏 𝑴𝒆𝒏𝒖 SenBotz ❏
𝑷𝒓𝒆𝒇𝒊𝒙 : 𝗠𝗨𝗟𝗧𝗜 & 𝗣𝗥𝗘𝗙𝗜𝗫
𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 𝑻𝒆𝒓𝒎𝒖𝒙𝑿 𝑶𝒏𝒍𝒊𝒏𝒆
𝑴𝒐𝒅𝒆 : ${publik? "𝙋𝙐𝘽𝙇𝙄𝘾":"𝙎𝙀𝙇𝙁"}
𝑷𝒓𝒆𝑴𝒊𝒖𝑴 : ${isPremium? "𝙎𝙐𝘿𝘼𝙃 𝘼𝙆𝙏𝙄𝙁":"𝘽𝙀𝙇𝙐𝙈 𝘼𝙆𝙏𝙄𝙁"}

❏ 𝑷𝒆𝒏𝒈𝒆𝒎𝒃𝒂𝒏𝒈 SenBotz ❏
𝘖𝘸𝘯𝘦𝘳 : ${namaowner}
𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : Jalil
𝒀𝒐𝒖𝑻𝒖𝒃𝒆 :  Gaada
𝑳𝒂𝒏𝒈𝒖𝒂𝒈𝒆 : 𝑰𝑵𝑫𝑶𝑵𝑬𝑺𝑰𝑨 🇮🇩

❏ 𝑼𝒔𝒆𝒓 SenBotz ❏
𝑵𝒂𝒎𝒂 𝑩𝒐𝒕 : ${namabot}
𝑷𝒆𝒎𝒂𝒌𝒂𝒊 𝑩𝒐𝒕  : ${pushname}

╭─❒ ⌜𝑨𝒔𝒖𝒑𝒂𝒏 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}asupangeayubi
┃⬡${prefix}asupanaura
┃⬡${prefix}asupanbunga
┃⬡${prefix}asupanayu
┃⬡${prefix}asupancaca
└──────────────

╭─❒ ⌜𝑺𝒆𝒓𝒕𝒊𝒇𝒊𝒌𝒂𝒕 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}serti1
┃⬡${prefix}serti2
┃⬡${prefix}serti3
└──────────────

╭─❒ ⌜𝑶𝒄𝒓 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}namaninja
┃⬡${prefix}pantun
┃⬡${prefix}katasindiran
┃⬡${prefix}katailham
┃⬡${prefix}tongue
┃⬡${prefix}ssweb
┃⬡${prefix}nickepep
└──────────────

╭─❒ ⌜𝑴𝒐𝒅𝒆 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}public
┃⬡${prefix}self
└──────────────

╭─❒ ⌜𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}amongus
┃⬡${prefix}patrick
┃⬡${prefix}toimg
┃⬡${prefix}sticker
┃⬡${prefix}ttp
┃⬡${prefix}attp
└──────────────

╭─❒ ⌜𝑮𝒓𝒖𝒑 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}lapor
┃⬡${prefix}request
┃⬡${prefix}here
┃⬡${prefix}setgrupname
┃⬡${prefix}setdesc
┃⬡${prefix}setppgrup
┃⬡${prefix}promote
┃⬡${prefix}demote
┃⬡${prefix}welcome
┃⬡${prefix}antilink
┃⬡${prefix}group
┃⬡${prefix}wame
┃⬡${prefix}notif
└──────────────

╭─❒ ⌜𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}tiktok {link tiktok}
┃⬡${prefix}play {Judul Lagu}
┃⬡${prefix}lirik {Judul Lagu}
┃⬡${prefix}herolist {Hero}
┃⬡${prefix}herodetail {nama Hero}
└──────────────

╭─❒ ⌜𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}addcmd
┃⬡${prefix}addprem
┃⬡${prefix}delprem
┃⬡${prefix}premiumlist
┃⬡${prefix}ban
┃⬡${prefix}unban
┃⬡${prefix}delcmd
┃⬡${prefix}listcmd
┃⬡${prefix}exif
┃⬡${prefix}bc
┃⬡${prefix}leaveall
┃⬡${prefix}bc2
└──────────────

╭─❒ ⌜𝑮𝒂𝒎𝒆 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}family100
┃⬡${prefix}tebakgambar
┃⬡${prefix}caklontong
┃⬡${prefix}tebakbendera
└──────────────

╭─❒ ⌜𝒊𝒔𝒍𝒂𝒎 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}listsurah
┃⬡${prefix}asmaulhusna
┃⬡${prefix}alquran 
┃⬡${prefix}alquran 
┃⬡${prefix}alquran 
┃⬡${prefix}alquranaudio 
┃⬡${prefix}alquranaudio 
┃⬡${prefix}kisahnabi 
┃⬡${prefix}jadwalsholat 
└──────────────

╭─❒ ⌜𝑨𝒏𝒊𝒎𝒆 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}ppcouple
┃⬡${prefix}uniform
┃⬡${prefix}cuckold
┃⬡${prefix}zettairyouiki
┃⬡${prefix}sfwneko
┃⬡${prefix}sao
┃⬡${prefix}cosplay
┃⬡${prefix}milf
┃⬡${prefix}loli
┃⬡${prefix}lovelive
┃⬡${prefix}hsdxd
┃⬡${prefix}husbu
┃⬡${prefix}wallml
┃⬡${prefix}waifu
┃⬡${prefix}saitama
┃⬡${prefix}gon
┃⬡${prefix}killua
┃⬡${prefix}kakashi
┃⬡${prefix}tsunade
┃⬡${prefix}orochimaru
┃⬡${prefix}mitsuki
┃⬡${prefix}sarada
┃⬡${prefix}boruto
┃⬡${prefix}sakura
┃⬡${prefix}sasuke
┃⬡${prefix}minato
┃⬡${prefix}naruto
┃⬡${prefix}copper
┃⬡${prefix}nami
┃⬡${prefix}ussop
┃⬡${prefix}sanji
┃⬡${prefix}luffy
┃⬡${prefix}zoro
┃⬡${prefix}senku
┃⬡${prefix}nezuko
┃⬡${prefix}tanjirou
┃⬡${prefix}natsu
┃⬡${prefix}sagiri
┃⬡${prefix}rimuru
└──────────────

╭─❒ ⌜𝑯𝒆𝒘𝒂𝒏 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}fox
┃⬡${prefix}dog
┃⬡${prefix}cat
┃⬡${prefix}panda
┃⬡${prefix}panda1
┃⬡${prefix}bird
┃⬡${prefix}koala
└──────────────

╭─❒ ⌜𝑲𝒐𝒅𝒆 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}tts
┃⬡${prefix}kodenegara
┃⬡${prefix}kodebahasa
└──────────────

╭─❒ ⌜𝑴𝒂𝒌𝒆𝒓 𝑴𝒆𝒏𝒖⌟ ❒
┃⬡${prefix}blackpink {teks}
┃⬡${prefix}pipe {teks}
┃⬡${prefix}heloween {teks}
┃⬡${prefix}heloween2 {teks}
┃⬡${prefix}horor {teks}
┃⬡${prefix}nulis {teks}
┃⬡${prefix}sirkuit {teks}
┃⬡${prefix}discovery {teks}
┃⬡${prefix}fiction {teks}
┃⬡${prefix}8bit {teks}
┃⬡${prefix}demon {teks}
┃⬡${prefix}transformer {teks}
┃⬡${prefix}berry {teks}
┃⬡${prefix}leyered {teks}
┃⬡${prefix}thunder {teks}
┃⬡${prefix}magma {teks}
┃⬡${prefix}stone {teks}
┃⬡${prefix}neon3 {teks}
┃⬡${prefix}glitch {teks}
┃⬡${prefix}glitch2 {teks}
┃⬡${prefix}broken {teks}
┃⬡${prefix}nulis2 {teks}
┃⬡${prefix}gradient {teks}
┃⬡${prefix}glossy {teks}
┃⬡${prefix}watercolor {teks}
┃⬡${prefix}multicolor {teks}
┃⬡${prefix}neondevil {teks}
┃⬡${prefix}underwater {teks}
┃⬡${prefix}bear {teks}
└──────────────`
sendButImage(from, anu,`\n${Tanggal}`, thumb, [
            {buttonId: `${prefix}owner`, buttonText: {displayText: `𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒖`, }, type: 1, },
            {buttonId: `${prefix}sc`, buttonText: { displayText: `𝑺𝑪𝑹𝑰𝑷 𝑩𝑶𝑻𝑾𝑨`, }, type: 1, },
            ]); 
sound = fs.readFileSync('./lib/Geleng.mp3')
sen.sendMessage(from, sound, MessageType.audio, {quoted: froxx, mimetype: 'audio/mp4', ptt:true})
break
case 'sc':
case 'scrip':
if (isBanned) return reply(mess.banned)
reply2(`https://github.com/SenBotz/SenBotz`)
break
//══════════[ ASUPAN MENU ]════════════════════════════//
             case 'asupangeayubi':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const geayubi = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await sen.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await sen.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              sen.relayWAMessage(prep)
              break
             case 'asupanaura':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const naura = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await sen.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await sen.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              sen.relayWAMessage(prep)
              break
            case 'asupanbunga':
            if (isBanned) return reply(mess.banned)
            if (!isPremium) return reply(mess.only.premium)
            reply(mess.wait)
            const bunga = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await sen.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await sen.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              sen.relayWAMessage(prep)
              break
            case 'asupanayu':
            if (isBanned) return reply(mess.banned)
            if (!isPremium) return reply(mess.only.premium)
            reply(mess.wait)
            const ayu = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await sen.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await sen.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              sen.relayWAMessage(prep)
              break
             case 'asupancaca':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const caca = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await sen.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await sen.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              sen.relayWAMessage(prep)
              break
//══════════[ANIME MENU]════════════════════════════//
            case 'ppcouple':
            if (isBanned) return reply(mess.banned)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              sen.sendMessage(from, cowo, image, {quoted: froxx, caption: 'Nih Versi Cowo Nya ^_^' })
              sen.sendMessage(from, cewe, image, {quoted: froxx, caption: 'Nih Versi Cewe Nya ^_^' })
              break
                case 'sao':
                if (isBanned) return reply(mess.banned)
				sen.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 sen.sendMessage(from, swordartonline, image, {quoted: froxx, caption: 'swort art online\nMEZ RazoR'})
				 break
				case 'hsdxd':
				if (isBanned) return reply(mess.banned)
				 sen.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 sen.sendMessage(from, highschooldxd, image, {quoted: froxx, caption: 'NIH BANG '})
				break
				 case 'lovelive':
				if (isBanned) return reply(mess.banned)
				 sen.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 sen.sendMessage(from, lovelive, image, {quoted: froxx, caption: 'NIH BANG '})
				break
                    case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					if (isBanned) return reply(mess.banned)
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					sen.sendMessage(from, qute6, image, { quoted: froxx, caption: ':)' })
					break
             case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
            if (isBanned) return reply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await sen.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Menuju Tak Terbatas', imageMessage: imageMsg,
              contentText:`Creator SenBotz`,buttons,headerType:4}
              prep = await sen.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              sen.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//══════════[ APIKEY ALPHA ]════════════════════════════//
case 'blackpink':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/blackpink?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'pipe':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'heloween':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'heloween2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'horor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${query}&text2=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'nulis':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'sirkuit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'discovery':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'fiction':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case '8bit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${query}&text2=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'demon':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'transformer':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'berry':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'leyered':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${query}&text2=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'thunder':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'magma':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'stone':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'neon3':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glitch':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glitch2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'herrypoter':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'embosed':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/embossed?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'broken':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'nulis2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'gradient':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gradient?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glossy':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'watercolor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'multicolor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'neondevil':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'underwater':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/underwater?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'bear':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} senCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/bear?text=${query}&apikey=${AlphaBot}`)
sen.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
//══════════[ ANIMASI HEWAN ]════════════════════════════//
                   case 'fox':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   sen.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'dog':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   sen.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'cat':
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   sen.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   sen.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda1':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   sen.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'bird': 
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   sen.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'koala':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   sen.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
              
// Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        sen.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
case 'zoro': 
case 'luffy': 
case 'sanji': 
case 'ussop': 
case 'nami': 
case 'copper': 
case 'naruto': 
case 'minato': 
case 'sasuke': 
case 'sakura': 
case 'boruto': 
case 'sarada': 
case 'mitsuki': 
case 'orochimaru': 
case 'tsunade': 
case 'kakashi': 
case 'killua': 
case 'gon': 
case 'saitama': 
case 'rimuru': 
case 'sagiri': 
case 'natsu': 
case 'tanjirou': 
case 'nezuko': 
case 'senku':
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			   
            anu = await getBuffer(`https://senbotz-api.herokuapp.com/api/wallpaper/${command}?apikey=SenBotz`)            
            sen.sendMessage(from, anu, image, { quoted: froxx })
            break
//══════════[ SELF DAN PUBLIC ]════════════════════════════//
case 'public':
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
publik = false
fakeText('*Sukses mengubah mode self*')
break
//══════════[ EXIF NYA GAN ]════════════════════════════//
           case 'exif':
                    if (isBanned) return reply(mess.banned)
                    if (!isOwner) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				     break
//══════════[ ISLAMI MENU ]════════════════════════════//
                case 'listsurah':
                if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                if (isBanned) return reply(mess.banned)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${Lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${Lolhuman}`)
                    await lolhuman.sendMessage(from, ini_buffer, audio, { quoted: lol, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
//══════════[ tts Gunakan Kode Bahasa ]════════════════════════════//
                     case 'bahasa':
                     if (isBanned) return reply(mess.banned)
                    sen.sendMessage(from, bahasa(), text, { quoted:froxx })
                    break 
                    case 'kodenegara':
                    if (isBanned) return reply(mess.banned)
					sen.sendMessage(from, negara(), text)
					break
                    case 'tts':
                    if (isBanned) return reply(mess.banned)
				    if (args.length < 1) return sen.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return sen.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							sen.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//══════════[ PREEMIUM ]════════════════════════════//
				case 'addprem':
if (!isOwner) return reply(mess.only.ownerB)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
if (!isOwner) return reply(mess.only.ownerB)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
                case 'premiumlist':
				sen.updatePresence(from, Presence.composing) 
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				sen.sendMessage(from, teks.trim(), extendedText, {quoted: froxx, contextInfo: {"mentionedJid": prem}})
				break
//══════════[ BAN MENU ]════════════════════════════//
case 'ban':
if (!isOwner) return reply(mess.only.ownerB)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
        case 'unban':
if (!isOwner) return reply(mess.only.ownerB)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break

//══════════[ Sticker Menu ]════════════════════════════//
           case 'ttp':  
           if (isBanned) return reply(mess.banned)
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp sen Botz Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    sen.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
          case 'attp':
          if (isBanned) return reply(mess.banned)
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           sen.sendMessage(from, buffer, sticker, { quoted: mek })
            break
            case 'patrick':
            if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			sen.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
			case 'amongus':
			if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${Lolhuman}`)
			sen.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
            case 'toimg':
            if (isBanned) return reply(mess.banned)
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await sen.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
                    case 'sticker':
					case 'stiker':
					case 's':
					if (isBanned) return reply(mess.banned)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await sen.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											sen.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await sen.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											sen.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
//══════════[ DOWNLOAD MENU ]════════════════════════════//
case 'play':
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksKey}&q=${bo}`)
thmb = await getBuffer(ini.result.thumbnail)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${ZeksKey}&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
sen.sendMessage(from, mp4, video)
break
case 'mp3':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksKey}&q=${bo}`)
mp3 = await getBuffer(ini.result.url_audio)
sen.sendMessage(from, mp3, audio)
break
case 'ytmp3':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
sen.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_audio)
sen.sendMessage(from, res, audio)
break
case 'ytmp4':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
sen.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_video)
sen.sendMessage(from, res, video)
break
case 'tiktok':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
              result = `DhenxCode¸ *Nickname*: ${data.result.author.nickname}\n*Like*: ${data.result.statistic.diggCount}\n *Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await sen.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await sen.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              sen.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'buttons3': 
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              sen.sendMessage(from, ini_video, video, { quoted: froxx })
              break
          case 'buttons4': 
          if (isBanned) return reply(mess.banned)
           reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Lolhuman}&url=${args[0]}`)
              sen.sendMessage(from, data, audio, { quoted: froxx })
              break
              case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${ZeksKey}&q=${q}`)
		     .then(res => {
			  sen.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: froxx, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
case 'lirik':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
if (isBanned) return reply(mess.banned)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (isBanned) return reply(mess.banned)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break

//══════════[ OWNER MENU ]════════════════════════════//

case 'addcmd': 
case 'setcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 𝙻𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break
case 'bc': 
                    if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await sen.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await sen.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							sen.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sen.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": 'by sen Bot',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "𝑴𝑬𝑵𝑼"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
        if (isBanned) return reply(mess.banned)
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await sen.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await sen.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	sen.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             sen.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
//══════════[ WELCOME MENU ]════════════════════════════//
case 'intro':
var intro = ` *𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆 𝐌𝐄𝐌𝐁𝐄𝐑 𝐁𝐀𝐑U𝐔︎︎*

┌ 𝐍𝐚𝐦𝐚:
├ 𝐔𝐦𝐮𝐫:
├ 𝐀𝐬𝐚𝐥:
├ 𝐆𝐞𝐧𝐝𝐞𝐫:
└ 𝐉𝐞𝐧𝐢𝐬 𝐤𝐞𝐥𝐚𝐦𝐢𝐧:
`
sen.sendMessage(from, intro, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
//══════════[ SETIFIKAT MENU]════════════════════════════//
case 'serti1':
case 'serti2':
case 'serti3':
if (isBanned) return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
sen.sendMessage(from, buff, image, { quoted: froxx, caption: 'Nih Bro Hasil nya' })
break
//══════════[ BERMAIN MENU ]════════════════════════════//
case 'nickepep':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${Leyscoders}`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${Leyscoders}`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'tongue':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'ssweb':
case 'ss':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
sen.sendMessage(from, buff, image, {quoted: froxx, caption : teks})
break
//══════════[ PEMBATASAN]════════════════════════════//
case 'notif':
if (isBanned) return reply(mess.banned)
if (!isGroupAdmins) return reply(ind.only.admin)
sen.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await sen.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await sen.sendMessage(from, options, text)
break
case 'wa.me':
case 'wame':
if (isBanned) return reply(mess.banned)
sen.updatePresence(from, Presence.composing) 
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
sen.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return reply(data.error)
reply(data.result)
break
               case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  sen.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Butuh info tentang apa ya?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}menu`, buttonText: { displayText: `𝑴𝑬𝑵𝑼`, }, type: 1, },
]); 
                 break
                 case 'request':
                 if (isBanned) return reply(mess.banned)
					const rq = body.slice(8)
					if (args.length > 300) return sen.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const ress = `*[REQUEST FITUR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					sen.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Request anda sudah mendarat ke owner, Requests palsu atau main² tidak akan ditanggapi.')
					break
case 'report':
case 'lapor':
if (isBanned) return reply(mess.banned)
					const laporan = body.slice(7)
					if (args.length > 300) return sen.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					sen.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
      case 'shutdown':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = sen.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             sen.groupLeave(id)
}
             break
        case 'join':
        if (isBanned) return reply(mess.banned)
            if (!isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await sen.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
        if (isBanned) return reply(mess.banned)
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = sen.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
        case 'ban':
        if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	    break
        case 'unban':
        if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
//GROUP MENU
       case 'online':
       case 'listonline':
       case 'here':                
       if (isBanned) return reply(mess.banned)
 if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(sen.chats.get(ido).presences), sen.user.jid]
             sen.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              sen.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              sen.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       if (isBanned) return reply(mess.banned)
           if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await sen.downloadMediaMessage(encmedia)
              sen.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'demoteall':
if (isBanned) return reply(mess.banned)
		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  sen.groupDemoteAdmin(from, members_id)
              
		 		    break
                
		 		    case 'promoteall':
	if (isBanned) return reply(mess.banned)
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   sen.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
if (isBanned) return reply(mess.banned)
				apri = 'PILIH MANA MIN?'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
if (isBanned) return reply(mess.banned)
      if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        sen.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
      if (isBanned) return reply(mess.banned)
  if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        sen.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':        
   if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await sen.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					sen.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break;
									case 'tagall':
									if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
                                if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						sen.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						sen.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						sen.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						sen.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						sen.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						sen.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						sen.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                if (isBanned) return reply(mess.banned)
                 if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await sen.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	sen.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'welcome':
if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                case 'antilink':
                if (isBanned) return reply(mess.banned)
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						sen.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
        if (isBanned) return reply(mess.banned)
     if (!isGroup) return reply(mess.only.group)
					sen.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await sen.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								sen.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await sen.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								sen.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break

//TOLS
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await sen.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
default:
if (budy.includes(`Assalamualaikum`)) {
sen.sendMessage(from, 'Waalaikumsalam, tuben dahh salam', text, {quoted: mek})
                  }
if (budy.includes(`Bot`)) {
sen.sendMessage(from, 'Ada apa?, bot aktif kok', text, {quoted: mek})
                  }
if (budy.includes(`Tes`)) {
sen.sendMessage(from, 'Hmmm', text, {quoted: mek})
                  }
}
if (budy.startsWith('x')){
try {
return sen.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}