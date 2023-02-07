import { InMemoryCache, ApolloClient } from '@apollo/client'
import { createApolloProvider } from '@vue/apollo-option';
const cache = new InMemoryCache(); 
const client = new ApolloClient({
    cache:cache,
    uri:"https://hasura.io/learn/graphql",
    headers : {
        "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzOTljYjJjY2FjMzJmM2I5YTc0Nzc0MiJ9LCJuaWNrbmFtZSI6Im1vaGFtZXdkIiwibmFtZSI6Im1vaGFtZXdkQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9kNmE4NzU4NWFjYzY3MDg1OGY0Mjg5NjA1YTUwZTQ4Mz9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1vLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTEyLTE0VDEzOjEwOjA1LjUxMloiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzk5Y2IyY2NhYzMyZjNiOWE3NDc3NDIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY3MTAyMzQwNiwiZXhwIjoxNjcxMDU5NDA2LCJhdF9oYXNoIjoiZWhPaWtJTjlSVWdOMVFxekgyUFJUQSIsInNpZCI6Im9SM1d4WmF3LW0xWUJBQjVDM2FqcnlZMjA3Z3lLZUMzIiwibm9uY2UiOiIwM3E0S3guVX5Db0RDWHQzNnhNVHBhOHJUT0RQZF9DZiJ9.A8H_o293BJ1W8CVIcNveQ_lzez_58vFu4yIOwLAaTT-Wob-bKvgA6BP0sg2Kq6S86AvUyIb5Iwgr2bGwZF42CvjF30_lEc2EHK1_e54hL-XXhM2k_Rk6ZeD-wPmw-XDC7wai4s45tY25wNBLpf_1XA2c8s9FHgBPtjNUB7Ou4_iS0UWCUfQ5E3A7bC4e9zXplDeZebZQHJdDllKOMo286T46AkU6fYht8eo9vrf_WhmQhtJEVGZc8H-R9TVQ6Pr_Txdn2XDJThBgKYB4EVtEQwrnJAO1Z_WpF2phdD7_j4I1s1zujb5duRI8WU_1Aax1dLw0SAOO3t3IzJVmU_4Ipg"
    }
});
export const prvider = createApolloProvider({
    defaultClient: client,
})