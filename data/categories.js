const categories = [
  {
    id: '1',
    image:
      'data:image/jpeg;base64,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',
    title: 'Sushi',
  },
  {
    id: '2',
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRISFRIRERgRERESEhgRERISGBgRGBQZGRgYGBgcIy4lHB4rHxgZJjgmKy80NTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHDQhISM0ND80NDc0NDY0NTY0NDQ0NDE2MTQxNDExNDE0NDQ0NDQ0MTQ0MTE0NDQ4NDQ0MTQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xAA4EAACAgECBAQEBQQBAwUAAAABAgARAxIhBAUxQSJRYXEGEzKBQpGh0fAUI7HB4RWC8QdSkqKy/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QALBEAAgIBAwIGAQMFAAAAAAAAAAECEQMSITEEQRMiUWGRoXGB4fAFFCMy0f/aAAwDAQACEQMRAD8A8akhhkEgqGpI0EkEkkEAkhkliJfpAKxHEBWEQQGoRAI4WAQCQiGoTBJXUtURAJaiEyGEQiWfSPWS67b9DKjJADBHqArBIkIENSVABUQy6opEEMrqWYmA6/4uCpNMChGP5Wai1HKwaYIFkhqCAAySGAmAGAGESVBIJJKkgFYhkkEAgjQCPUAWoajARsSAnf8AzBAqJfp6yx2AFCB9rAO379REAgAqQR6hCwBVlixNMtxwSiVAZYRBpgkVVmQi1ExpLiJUFDbmKRLXEWpYCiSowkMAQrBUsqKRABAIRCFgA0wFZYFj1AKQsDCWGVtBAhERlj3GqAUEQpjuXDHe/QecDsOgggoYfeSGpCIJsWSGpIBXJJDAJGBixgIARDBCDBBBGECiOIFBURqiwwWDUAkEZEuCAqY4EBSobqCS5FhaIMkgaVBGEQiWExGgGz5dyDiM6HJjx2itp1MwQFu4W+tSZeQcQrBWxgE9P7iH/BnY8i5sTwWBFUkIHR9K3ThrJNeepT95kZuOQHS6aWXqGBVh33BnNLO1Jo7odLGUVJvk4xPhjN3fEv8A3MT/APmWp8M5N/GhG/UMNp6AEwlMbbW41nfaidgPaph8bw7mhjtQDubHTyA3lPGmW/toV3OJy/C+fcgYz7O3+xNdn5VmT6sT15qNY/8Arc9AfHkA3Zh+kqByDrpceo3/ADhdRJc0VfSx7Wed126e8NTvs+JX+pa9/wB5oubcmAGtB7jt9prHqE3TVGU+mkladnNmIyy51rboR1izc5igiHGB3/aSMRLATK25A6f771KTLysrKwQVGSOYtQQCSGSAVSXBHxpZgkAjCRgO28ggMMgEkgggYCMIBHglAENSRkWzUAgEuWl94reHbre8QtBI+qEyomOjbSoDGEgnov8A6W/DQyM3G5F8GMlMAO+rIPqf2XoPW/KRKWlWTGNujV/D3wRmyHHlzppxMpcprKZGFEKKrw7gE969Tt0ifC3D49NYUYoOuQF7N3bXsT9u07XjcoGwG/kJpOJffznl5805d6/B34ccV2NQ+Gum1EkadqN3t5byrJwpdi1Dxdhf+yZtkxgzJHBg7jYicLs7NSRy/F8tyGtD0FAChgSteQPUfrMJsvEJu2JyANyniH6b/pO8w8L2qjUc8BV7ddj7TWGScfchzjwecnnik0W0nureE/kd5lcLx4bfavznU8y+GsWZaZFbbuNx7HtOF5pyXPwNuoOXDe/cpfn5idMJqe3D/nczcq/B0IAYWJg58dbdLmBwXNVIDAij5f7meeLDSSTTcx5arg7BHAtT2YeRnLZFIJUggg0RO6zIWqr23B/n83mt5pyn5o1rSuBfo3pOjDmraXBy58F+aPJyZjCR0KkqwIINEHYgxqE7DhK2WIwlzCVPLArMUiORFJggEkFyQQKiX6dI5etliu4NV5UaFRQIJGAkqSSCCAQgSQiAMIYBGgsQRhBUkEBJkqQCGoJFIjoIyiESoI2wJ60J9DcDjThOFw4tlGLCgJPXXptj7liT954r8J8mPFZxj1qgxgZXLDVaKygqB3Jv+dJ2HxbxmbIXOJsjUzKaXUDpYjYAbiiDOTqcqTUe5thj3ZvsvO0b6Wr7kzFXmiEn6j32UmZHJfhbCuJRnbVmK3lKNpUMfwr7bC+5BlmX4R4ewV4jMlm/DlFj2sTzpTV02jsjXuV4+YIdhZJ3Cgb/AJTIx8yHdXU+RRr36bVOX+I/hvicNNw3HPnB/AyprHmQwoEdNqmgPEcyx/U/Egd7UEfmBLqEZcTV/kOaXZ/B6vwvMUJrcHyYEGbNHDA9J5BwnH8SwAyZcq9wSWUA+sqXj+JXW/8AUZqWiNRBBJ28umxloxr0Zi8ke9r9D2YqKG619picXwiuGBAYMKN+U0fI+VZs3DY8jcU2M5Bq0tjRxV7VuOo3+813xPl4zgtDBk4jG7abBfGysATRUlhRHf06CRWravsupRW9/TOA+LuUNwefVjsJkNqO3sRMjleZmCtdggH2vtN7zzNk43AUOJdVBk0uDRG92wE5rCGwEY2UoWJoEg796IJBE31qcKvzL5omElq2ezOmxEEbdIM9rv7f+JhcHmqqPWbHKmpZmzp9jTc55UmUah4XA2auo8m/eck+B0Yq4oj+WPMT0PLhJG2xH6zSc24YOh28S7r+06MOZryvg5M+BPzLk5Zx5StjLSZS87zhFaIos1GMrIghmR8kesEx5IIKhHBiCNBI1w3FEIgDCMBFEsTeCEQQgR3Su8FQSLCJIIA4jgyupAYJLRJVRRG03t57SoPRfg3lS4HxM+PJkzZQQw1DHiw4zRJc7lj9N0CAaE6DL8VcMuY4izLTaAxDFS3T6qFb+Ynn3BcY9O/zCHZt9JOkgsGqvINM3gSXy6nP0kZC3atrb1Ptv+s8rP0scz/yPc78c1FeVbHpisGAYEMD0IIIr3jZUVVBLiyfpG5A8yZ55/1p8L68QyaFPiV6IZDQFgbIdidunrU6TlnO8XFLqQ0y1rRq1KfUeXrPFzdFPDbrVF9/Q68c1JpXXsbjYyrPlRPqNeQFkn2A3MweN48YULGr+lATVuegnO5uYjWXbUzMNJDbAMD+E9hY6feR0vRvM7bpGmSenY6zFx+JiE1AMeivaEjzAP1D2l54dKrQleWkETlMT4si6G00fr1qeoGq+tdL/KVcLzDNw5VlJ4nFqONkZrcUSNSsevToTXTpOrJ/TZJXjl+j/wCmSzJ8nb48rL0YiulXt9rmLzDh1zqFyW4U2PEQQfMEe8nLuPx51142DC9LA0Crdww7GZXHacQtmApbM81eNFtbpp/ZZ6Hs1dmnHJkQKUZwF2IJ1bHzB7e05D495Y4GPIQSpatS/hYnYHyBPQzbcz55l1jQ2gWBS10sbMel+l7SnLxrZ1OF3Lo9hwVGwG6jUBd339BPW6bFnhOOSTXv6mMoY2moo5PlHFk6bN2Bfv3nYcIQQL6zguIxfKzlELMNyNXW+p379513B5Dpxtf1Af4npZY1uuGMcrVPlG3yKJqeOxj89jNgmX7zA417Ir7+0yiaS4ON4/Dpcjsdx/uYORZvef4dtQ7G/tNE7bT0sUtUUeVmjpk0UsYlwwTUxBJDckApEYRTIDBI8IgEKwBlW+kvUhR2JP8AKivQAIr7b7esRTBBbe9wiKscCCQFZNMYCMBAEVY2mWLAwgkPD4WdlxorOzkKqqLJJmaeVZlyJibG6u7BUHUMSaFEWD0M3HwVy9zlHEAeBNaEqbYMV/8Ab3Hireut9p1j5Ar2ULsAMgGmgH2N6v5v+vndR1rx5NEUmq39bLKNo5XguTlc+FMr+AnVkYKyBa/CSfPbf1M7DnvKOX6MrYsmXFoRDoxZAAzOSOh2vuess4XmJ/uOMejXQK7tsOjbDY9e3ec/xHL0fxksmuh/belIJO7IRV7jp1995jj6621kjx39TSLUeTn+I5dkOb+nxZvnePQp0Op03VkKDajqT6XMTieE4nhWbMrBTicKxUn6jQrpRBvp6ek7z4W4NsGTIX4dMmlyMXEAjV4qRQQbq/IEm72reVcyAY51ZepII0qy6qAVtPfwlrv37RLq0sulRuLXzZaU03adHD8y+Ks2ZkYhV0LVAkgk/Ud/PymCeavYYbEdvqBFg0fS5uOI5UhOUHGyNj3OixfiC7LuDuRsK6iXcr5cuHKvzU16sTsu6EBtO2ob6e43nVeHHGopfgvKT5lLc1+D4gYEXjFXuBvt5bzY/wDXAov5L4vmeNW8QDDpa7WQfymTjVGCv/TAKylGar05lGotq6EMCNv2mfwxUgvnI0IwRXcjQBX0gnpR2+8y8WLdafsmMk2lfJz/AAHxIeH4hcyaijbZVoLqW72HSxexm+5z8RJxBP8Ac0Y13UDdmI7t5ddptX5rwmOgmIZHQDQxCaBq/Fsd6G9VKec8ejuKQKwtHKbqXFWQPLvMsvhalPTbS/nwawmk9LlSOXbj9TKNYcV9TkqB6E1Q/WZmHm2NLJ0kta0nQbG9+h6/y5M/D61drWkZQyk779wPuPzEoX4ftFcl1LuwVaoaAB4ifKz+k0jOEtnsaZYaF5Xe5Uz43OBlDFsfz24hiOrMwVF8r0rdDz9ZtsWUaFAB26dpXi4cIoxqAFHXzJhVNwPKWyNPgrBNcmYmTtD8nv8AeUA77dpZ87t+cyo1s13NMYIPrt9pynELW3lOw4ze/wA5y/NMVNfY7fedWCVOvU4+pha1ehrGimORFM7DiYKkgkggqEYCKsdYAQJBCZKgBEdVgUS1RACgj1FEcGCSCOIojLADCBGZNr2gEAz+Uc2ycM5dNB1UGDrqBAut+o6noZ2vIeOL8MuTKVss6Bx1I+kAm/q6/ap54ZJx9T0kcy9G63rfYlSo6XlvMWGTMgckugZTf4kLeE+hDE/aNxnMwjgDVp0IT4r0uVBYqeux2r3nLqSCCCQRuCDRBlubiWb6tz5+fvKz6RWnzsaRlFqmdUvMS2LDkLsAGK5PFQajpL0Ku7+xNR+I5wWyowOhFdUYsCW0hdJOoHe/UGv1nJY+KYaULNpXdd70m728t95nYqNkHf6uvXz+/eYS6eMXuvX7Lxxp9zf4lV7UMqKGfTrrSLayQ23e+12b6bTHz/O0BfBmKM6Po+o4yAQQRs24O3XbaHlvFsBpKoQbvv7HaZOPFWX5iEYj0IQ0CCNxvKaVH9y/gWtjX5uGy6GXCoRSFY6i+mgKJG/XUCN/WYnB/wBRhXJ8xQ2NihexYCg3a77E2eu065uFV1r8TIFsHTe/2HWarndJh0E6rA2b0FCgNukRm/8AV00/n5KvA1uYWLGjn5yNo1MFRPMEsFBBJCm1IsbGxNhmwOFbP4CrkBQNyelHbvt19JruGRvk4k/tVkXJ1+W7aT7i1HUde0PJuM+W3y8ia1ZdK2SNIB6rtvvt7D0qVnFu2nddvYyUXdG14PMg8LAtYLggISreTee221HufTKdvCB0AA9N+5ry329ovBFVdtJUo4RlFElSARW/lczszoR0HvtIx41epnXig6tnOcRlHQdYcLUN5kcThF3/AJExWNTZuzYnEP5HvtUpRjIwuRBJJHfpNXx2HWpH5e821Sh8UlOnaIlHUqZx7LVjy6ypjNxzLhKYsO/X1mrZJ6EJKStHmzg4umU3JH0yS5SjHEYRnAA9fT7ytTJILQYREuMDIBascGIDCDJA4jAxQ0IaQCwGW41rcxQtCx1G/wDxEZ7gFrvcAlQaMGgksMkUNJACIai3CGgDESaq6GopaLqlWk+SU2uDKTmLr2U/mDMrHzwj8F/9/wDxNUxiTOWGEuUaLNJcM3yfELDop6EC3/YTA47m+VzZRdum9/tMC5NUiPT44u0g8833GbjWYgHStbbLX+ZsuC4kCt7oVubmuD+e8rZR2tfaTLEnwWjl9Tr+H5jQmWOYgicKudl73+ktXmTd5hLAzojnTOvzccD0mI2e5oF5hfeXLxso8bRfxEzbrk9e0uxvNGOLmRi4qVcGWUkbsPI1TXJnvvLfnfz1laLainjUBBmoy8KDv0Pp/ubnXq26/aY74a8R+3nNYScTKcVI0/8ARN5wzZb+X+JJt4zMPBRy+q+sIiiMDOo4xoyxYwMAcGMJWDGBgD3IDBAIJLlaEmVgwkwBlMYysRtUigOplmqY9xtUkFlyaogU1dRTIBYWkUxBDcE2MYLgBgJgWG4rGAmIWgWPcim/WIv6bX7Ry4XpufP+dpFCx8jACu8xm3hLRSYoWDSRAHIhuG4pEqbHXiJdj4qYhgIlXBM0jNm3wcUJmplsV2nPY3NzPxZzMJ464N45DeqQFFddje3WWFb3Nec1GPie1k+0zUz7TGSaNlJF3y/SSL88ev8APtDK0Ws4uG4IZ6Z5IQY1xBGEAsUwgwrjFWdv55QQBgY1ysQwCwQxAYNUAcmQGJcIaAWXGRb9B3MmNLF/lA+Ty2gFjv2HSVXELRSZBJfqguVBobkgfVJcQtF1QByYhMhMUtIBaMu1V2qVXATFuAPcUmC4CYAbkuLcFwBrhDSu5LgWW7R0yESi44aQ0aRkZiZa85k4+IP7TWjJLFzb9BM5Qs1U6NpraSYHzG9f/lJM/DL6zXQySTqOIly5Vrc+tD2kkgCvkuS5JIAQYbkkgE1Q3JJAIDJckkAYZD0swXJJAJcUwyQCXDckkAFwEySQAaomqSSAQmC5JJBJLguSSSQCSSSAWqgqzKpJIBJLkkgFim5LkkkGseCz5h85JJJFE2f/2Q==',
    title: 'burgers',
  },
  {
    id: '3',
    image:
      'https://thumbs.dreamstime.com/b/toasted-sandwich-cheese-turkey-fresh-vegetables-dark-background-186904763.jpg',
    title: 'Sandwich',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Full Meal',
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'salads',
  },
]

export default categories