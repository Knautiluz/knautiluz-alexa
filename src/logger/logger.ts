import axios from 'axios'

export class Logger {
    info(value: string): void {
        axios.put('https://southamerica-east1-knautiluz-alexa.cloudfunctions.net/knautiluz-alexa-logger/log', { data: value, level: 'info' }, { headers: { 'User-Agent': process.env.AGENT } })
        .finally(() => console.info(value))
    }

    warn(value: string): void {
        axios.put('https://southamerica-east1-knautiluz-alexa.cloudfunctions.net/knautiluz-alexa-logger/log', { data: value, level: 'warn' }, { headers: { 'User-Agent': process.env.AGENT } })
        .finally(() => console.warn(value))
    }

    error(value: string): void {
        axios.put('https://southamerica-east1-knautiluz-alexa.cloudfunctions.net/knautiluz-alexa-logger/log', { data: value, level: 'error' }, { headers: { 'User-Agent': process.env.AGENT } })
        .finally(() => console.error(value))
    }
}