export function sort(...args) {
    return Array.from(
        args.sort((a, b) => a - b)
    );
}
