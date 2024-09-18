   const { shout, whisper, logShout, logWhisper, sayHiToHeadphonedRoommate } = require('../index.js');

   describe('shout(string)', () => {
     it('receives one argument and returns it in all caps', () => {
       expect(shout('hello')).toEqual('HELLO');
     });
   });

   describe('whisper(string)', () => {
     it('receives one argument and returns it in all lowercase', () => {
       expect(whisper('HELLO')).toEqual('hello');
     });
   });

   describe('logShout(string)', () => {
     it('takes a string argument and logs it in all caps using console.log()', () => {
       console.log = jest.fn();
       logShout('hello');
       expect(console.log).toHaveBeenCalledWith('HELLO');
     });
   });

   describe('logWhisper(string)', () => {
     it('takes a string argument and logs it in all lowercase using console.log()', () => {
       console.log = jest.fn();
       logWhisper('HELLO');
       expect(console.log).toHaveBeenCalledWith('hello');
     });
   });

   describe('sayHiToHeadphonedRoommate(string)', () => {
     it('returns "I can\'t hear you!" if `string` is lowercase', () => {
       expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
     });

     it('returns "YES INDEED!" if `string` is uppercase', () => {
       expect(sayHiToHeadphonedRoommate('HELLO')).toEqual('YES INDEED!');
     });

     it('returns "I would love to!" if `string` is "Let\'s have dinner together!"', () => {
       expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual('I would love to!');
     });
   });
