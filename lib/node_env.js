export default function isDevMode() {
    return process.env.NODE_ENV == 'development';
}