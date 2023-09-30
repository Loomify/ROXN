export default defineEventHandler((event) => {
    const current_date = new Date()[Symbol.toPrimitive]('string');
    return {
        date: current_date,
        events: [
            {
                type: 'webevent',
                name: 'account',
                version: '1.0.0',
                url: 'account',
            },
        ]
    }
  })