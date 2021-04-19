const fetch = require('node-fetch');


const deleteProfile = (id) => {
    return fetch("https://payments.uber.com/api/paymentProfileDelete?key=production_unwbby69bu4pr20b&localeCode=en-US", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9,pt-PT;q=0.8,pt;q=0.7",
          "content-type": "application/json",
          "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-csrf-token": "x",
          "cookie": "marketing_vistor_id=38dd8d92-7c96-48dd-962e-b849a28a9053; deviceCookieID=684e223a-3260-4b74-b671-160b1663da3a; sid=QA.CAESEH2qnF61mEZprMwh6tgr1o8YqpicgwYiATEqJGQ5NTQxOWFjLTQ1NzUtNDExMC05NWE5LWQwZTQwZWQ1ODllZDI84lgCme81pKifqYm7UJI-4OzfiAMKLvbKHdw3H9PzYETjNvdDDPsRE3Yd-vRFd7f1JSO4tBOVMikXkv0qOgExQgh1YmVyLmNvbQ.K018bBAnoGP-t-QINxZ4MeXfWH5AU87vePgVUsiRRBg; fsid=eb886fhk-egji-jhii-tqww-2q5wt88157dd; csid=1.1617366091912.vPax4asiInxNG/XPv7GYcl0lrSF2qLv25xruIB/44yI=; _ua={\"session_id\":\"0d46b504-591c-46a8-b93d-438c8bf3d92a\",\"session_time_ms\":1614774091918}; udi-id=eMPXDBAKJmbRPt8YbY6Ots8+3mN+eR/QHwp70hrm2jRBNFOBK/TS7moPD/Wsvo7OECGnnd0MUaTDUipUEqgtkpnbpV4LcRkUqErrm17l8zcWiqE0Vxku6wY6azh8jrZdXXKVZZ6mOCQQ1yXFha4TJKVaj4fpAHzIhjGGoUFrxgU4S87QFE3hPjmk7NKuN+56hG1dIjdFUHWWKbbq0f1WWA==S3pM+iS834djCB3uLnwN4A==u0S9AHltj1I1yK9P5V2n3ikij5Ayw4hhXY63B4cSQkU=; cookieSession={\"rateLimitingID\":\"995a0754-6652-40e1-bb90-e18443d798dd\"}; _udeviceid=043bd61b-a835-42b3-aa6d-313f6c1076f6; _cc=AeVqKLoNoGNWuGKrE2pLj9Ft; jwt-session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTUyOTQzODksImV4cCI6MTYxNTM4MDc4OX0.Y9k6Zj5rmEiq4a1ckuUmoXjVhIobm7OEfTQBTPW88-o; _uds={\"deviceSessionId\":\"1dce7975-7b5e-40f9-af8f-835b3514dd7c\",\"userHash\":\"dbd6b76d5b6ea410bed460477993e3a11a2e1c156c96f71bdf1ca27397ec7680\"}; udi-fingerprint=Ad0tTDNIVXnyh3sqN5GIVytit+rbBVXFNCgLdyXmeH0WE9vD81KbMETKkOSRmIe/ZkfNJQB3VWHfXj9NdCZAKQ==k07Ap93VnHlAG46tFp/yWYJT2UvING+YPDsNNVNLgHA="
        },
        "referrer": "https://payments.uber.com/detail/f902bc86-c9b6-44b6-814b-76a65d22479a?key=production_unwbby69bu4pr20b&layout=stretch&readOnly=false",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"body\":{},\"headers\":{},\"params\":{\"id\":\"${id}\"}}`,
        "method": "POST",
        "mode": "cors"
      });
}


const getPaymentProfiles = async () => {
    const tempData = await fetch("https://wallet.uber.com/api/getPaymentProfiles?localeCode=en-US", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,pt-PT;q=0.8,pt;q=0.7",
        "content-type": "application/json",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-csrf-token": "x",
        "cookie": "marketing_vistor_id=38dd8d92-7c96-48dd-962e-b849a28a9053; deviceCookieID=684e223a-3260-4b74-b671-160b1663da3a; sid=QA.CAESEH2qnF61mEZprMwh6tgr1o8YqpicgwYiATEqJGQ5NTQxOWFjLTQ1NzUtNDExMC05NWE5LWQwZTQwZWQ1ODllZDI84lgCme81pKifqYm7UJI-4OzfiAMKLvbKHdw3H9PzYETjNvdDDPsRE3Yd-vRFd7f1JSO4tBOVMikXkv0qOgExQgh1YmVyLmNvbQ.K018bBAnoGP-t-QINxZ4MeXfWH5AU87vePgVUsiRRBg; csid=1.1617366080725.Ppu+Sj/pl0ZxjZvCTB+aSVYZqO2N+/4NiJEZys5o7uk=; fsid=eb886fhk-egji-jhii-tqww-2q5wt88157dd; _ua={\"session_id\":\"8a8e7b31-3c67-4b95-b5fa-41d32f62ba5b\",\"session_time_ms\":1614774080730}; udi-id=3dz0BDb6PNnpy5I1tO4fUPKBVRPW50pJjrK+6p1VBrWb0C8NjiXJDrBzEsHf89FhrFyAb533fuqoDBTafXHRloh8S2zcfRtZGSObOQstJX8izE7KUW+I9TmXvkWlUE75GNkwKEN74PxocAaexoX06GLhdn/lhnLb8oajLW8odNrW5QVMG8I0T7MiL42uV99I47jE5Y/FuF0NThJ9T5hQEQ==j+/mm2ysr21Z23dXn3CsgQ==6TeVRzu+WNvfOy8FAIdkf9zZyt/7u7ywGqUc2+3leic=; _cc=Ad7FFe6Zzz7XY80sKTBymIpq; jwt-session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTUyOTQzNzgsImV4cCI6MTYxNTM4MDc3OH0.WpgEnAT7UXycfLbD5_2vPBeULnGY6hU7ks1lDRkzQwY; udi-fingerprint=YiN85tfcG5w0OmNjwnIVV2Vj3DVOqDG1MVqIOW8tUGQa3wdBkeK5g3f3s2me2gGE0w10Kf49Y4ngJb+uj8Iuvg==VW9dFV25o9xFZO03SBspeEEx1lqRpCnxo++JaEu4Wew=; _uds={\"deviceSessionId\":\"830e6f50-cf62-4c66-9a39-a610dbb09ac4\",\"userHash\":\"dbd6b76d5b6ea410bed460477993e3a11a2e1c156c96f71bdf1ca27397ec7680\"}"
      },
      "referrer": "https://wallet.uber.com/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{}",
      "method": "POST",
      "mode": "cors"
    });

    const data = await tempData.json();
    const {paymentProfiles} = data.data;

    for (const paymentProfile of paymentProfiles) {
      const {uuid} = paymentProfile;
      await deleteProfile(uuid);
    }
}

getPaymentProfiles();