//
//  StorageViewController.swift
//  AR Storage Measure
//
//  Created by Amirmehdi Sharifzad on 2019-02-03.
//  Copyright © 2019 Storage Share. All rights reserved.
//

import UIKit
import Firebase

class StorageViewController: UIViewController {
    
    var storages = [Storage]()
    var ref = Database.database().reference()

    @IBOutlet var menu: UIPickerView!
    @IBOutlet var textView: UITextView!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        print("123")
        loadSampleStorages()
        print("456")
        var s = ""
        for storage in storages {
            s += "Area: \(storage.area) sq.ft., Price: $\(storage.price), rating \(storage.rating)\n"
        }
        
        print(s)

        // Do any additional setup after loading the view.
    }
    
    private func loadSampleStorages() {
        ref.child("storages").observeSingleEvent(of: .value, with: { (snapshot) in
            // Get user value
            let storages = snapshot.value as? NSDictionary
            print(storages!)
            var st = ""
            for (key, storage) in storages ?? [:] {
                var s = storage as? NSDictionary
                let l = s?["length"] as! Float
                let w = s?["width"] as! Float
                let p = s?["price"] as! Float
                let area = l * w / 144
                st += "Area: \(area) sq.ft., Price: $\(p), rating \(Int.random(in: 0 ... 5))\n"
                guard let storageObj = Storage(id: key as! String, price: p, area: area, photo: nil, rating: Int.random(in: 0 ... 5))
                    else {
                        fatalError("Unable to instantiate \(key)")
                }
                print("\(storageObj._id) \(storageObj.price)")
                print("\(storageObj.area) \(storageObj.rating)")
                self.storages.append(storageObj)
            }
            self.textView.text = st
            
            
        }) { (error) in
            print(error.localizedDescription)
        }
    }
    
    
    
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
