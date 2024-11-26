export const proxyAbi = [
    {"type":"constructor","inputs":[{"name":"_impl","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"fallback","stateMutability":"payable"},{"type":"receive","stateMutability":"payable"},{"type":"function","name":"impl","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"setImpl","inputs":[{"name":"_impl","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"error","name":"DELEGATION_FAILED","inputs":[]},{"type":"error","name":"PERMISSION_DENIED","inputs":[{"name":"","type":"address","internalType":"address"}]}
]