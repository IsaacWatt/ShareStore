//
//  StorageSpaceViewController.swift
//  Storage Measure
//
//  Created by Amirmehdi Sharifzad on 2019-02-02.
//  Copyright © 2019 Storage Share. All rights reserved.
//

import UIKit
import SceneKit
import ARKit

class StorageSpaceViewController: UIViewController,  ARSCNViewDelegate  {
    
    @IBOutlet var sceneView: ARSCNView!
    
    @objc func pinchGesture(_ gestureRecognizer : UIPinchGestureRecognizer) {
        guard self.grid != nil else { return }
        let action = SCNAction.scale(by: gestureRecognizer.scale, duration: 0.1)
        self.grid.runAction(action)
        gestureRecognizer.scale = 1
        print("assdd")
    }
    
    
    /*
     @IBAction func actionTriggered(_ sender: UIButton) {
     if mode == .measuring {
     mode = .waitingForMeasuring
     } else {
     mode = .measuring
     }
     } */
    
    var grid: Grid!
    //var box: Box!
    //var status: String!
    //var startPosition: SCNVector3!
    //var distance: Float!
    //var trackingState: ARCamera.TrackingState!
    // enum Mode {
    //     case waitingForMeasuring
    //     case measuring
    // }
    /*
     var mode: Mode = .waitingForMeasuring {
     didSet {
     switch mode {
     case .waitingForMeasuring:
     status = "NOT READY"
     case .measuring:
     box.update(
     minExtents: SCNVector3Zero, maxExtents: SCNVector3Zero)
     box.isHidden = false
     startPosition = nil
     distance = 0.0
     //status = "NOT READY"
     setStatusText()
     }
     }
     }
     
     func setStatusText() {
     var text = "Status: \(status!)\n"
     text += "Tracking: \(getTrackigDescription())\n"
     text += "Distance: \(String(format:"%.2f cm", distance! * 100.0))"
     statusTextView.text = text
     }
     
     func getTrackigDescription() -> String {
     var description = ""
     if let t = trackingState {
     switch(t) {
     case .notAvailable:
     description = "TRACKING UNAVAILABLE"
     case .normal:
     description = "TRACKING NORMAL"
     case .limited(let reason):
     switch reason {
     case .excessiveMotion:
     description =
     "TRACKING LIMITED - Too much camera movement"
     case .insufficientFeatures:
     description =
     "TRACKING LIMITED - Not enough surface detail"
     case .initializing:
     description = "INITIALIZING"
     case .relocalizing:
     description = "RELOCALIZING"
     }
     }
     }
     return description
     } */
    
    func newSphere(at position: SCNVector3) -> SCNNode {
        // Creates an SCNSphere with a radius of 0.4
        let sphere = SCNSphere(radius: 0.4)
        
        // Converts the sphere into an SCNNode
        let node = SCNNode(geometry: sphere)
        
        // Positions the node based on the passed in position
        node.position = position
        
        // Creates a material that is recognized by SceneKit
        let material = SCNMaterial()
        
        // Converts the contents of the PNG file into the material
        material.diffuse.contents = UIColor.white
        
        // Creates realistic shadows around the sphere
        material.lightingModel = .blinn
        
        // Wraps the newly made material around the sphere
        sphere.firstMaterial = material
        
        return node
    }
    
    func newBox(at position: SCNVector3, width: CGFloat, height: CGFloat, length: CGFloat, chamferRadius: CGFloat) -> SCNNode {
        let box = SCNBox(width: width, height: height, length: length, chamferRadius: chamferRadius)
        
        // Converts the sphere into an SCNNode
        let node = SCNNode(geometry: box)
        
        // Positions the node based on the passed in position
        node.position = position
        
        // Creates a material that is recognized by SceneKit
        let material = SCNMaterial()
        
        // Converts the contents of the PNG file into the material
        material.diffuse.contents = UIColor.white
        
        // Creates realistic shadows around the sphere
        material.lightingModel = .blinn
        
        // Wraps the newly made material around the sphere
        box.firstMaterial = material
        
        return node
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Set the view's delegate
        sceneView.delegate = self
        
        // Show statistics such as fps and timing information
        sceneView.showsStatistics = true
        
        // Create a new scene
        let scene = SCNScene()
        
        // Set the scene to the view
        sceneView.scene = scene
        
        // Set a padding in the text view
        // statusTextView.textContainerInset = UIEdgeInsets(top: 20.0, left: 10.0, bottom: 10.0, right: 0.0)
        // Instantiate the box and add it to the scene
        //box = Box()
        //box.isHidden = true;
        //sceneView.scene.rootNode.addChildNode(box)
        //let dot = newSphere(at: SCNVector3(0, 0, -0.5))
        // sceneView.scene.rootNode.addChildNode(dot)
        // Set the initial mode
        // mode = .waitingForMeasuring
        // Set the initial distance
        //distance = 0.0
        // Display the initial status
        //setStatusText()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        // Create a session configuration
        let configuration = ARWorldTrackingConfiguration()
        configuration.planeDetection = .horizontal
        
        // Run the view's session
        sceneView.session.run(configuration)
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        
        // Pause the view's session
        sceneView.session.pause()
    }
    
    func session(_ session: ARSession, cameraDidChangeTrackingState camera: ARCamera) {
        // trackingState = camera.trackingState
    }
    
    // 1.
    func renderer(_ renderer: SCNSceneRenderer, didAdd node: SCNNode, for anchor: ARAnchor) {
        let grid = Grid(anchor: anchor as! ARPlaneAnchor)
        self.grid = grid
        node.addChildNode(grid)
    }
    // 2.
    func renderer(_ renderer: SCNSceneRenderer, didUpdate node: SCNNode, for anchor: ARAnchor) {
        if self.grid.anchor.identifier == anchor.identifier {
            guard let foundGrid = self.grid else {
                return
            }
            foundGrid.update(anchor: anchor as! ARPlaneAnchor)
        }
    }
    
    
    /* func renderer(_ renderer: SCNSceneRenderer, updateAtTime time: TimeInterval) {
     // Call the method asynchronously to perform
     //  this heavy task without slowing down the UI
     DispatchQueue.main.async {
     //self.measure(time: time)
     }
     } */
    /*
     func measure(time: TimeInterval) {
     let screenCenter : CGPoint = CGPoint(x: self.sceneView.bounds.midX, y: self.sceneView.bounds.midY)
     let planeTestResults = sceneView.hitTest(screenCenter, types: [.existingPlaneUsingExtent])
     if let result = planeTestResults.first {
     status = "READY"
     
     if mode == .measuring {
     status = "MEASURING"
     let worldPosition = SCNVector3Make(
     result.worldTransform.columns.3.x,
     result.worldTransform.columns.3.y,
     result.worldTransform.columns.3.z
     )
     
     if startPosition == nil {
     startPosition = worldPosition
     box.position = worldPosition
     }
     
     distance = calculateDistance(from: startPosition!, to: worldPosition)
     box.resizeTo(extent: distance)
     
     let angleInRadians = calculateAngleInRadians(from: startPosition!, to: worldPosition)
     box.rotation = SCNVector4(x: 0, y: 1, z: 0, w: -(angleInRadians + Float.pi))
     }
     } else {
     status = "NOT READY"
     }
     setStatusText()
     } */
    
    func calculateDistance(from: SCNVector3, to: SCNVector3) -> Float {
        let x = from.x - to.x
        let y = from.y - to.y
        let z = from.z - to.z
        
        return sqrtf( (x * x) + (y * y) + (z * z))
    }
    
    func calculateAngleInRadians(from: SCNVector3, to: SCNVector3) -> Float {
        let x = from.x - to.x
        let z = from.z - to.z
        
        return atan2(z, x)
    }
    
    // MARK: - ARSCNViewDelegate
    
    /*
     // Override to create and configure nodes for anchors added to the view's session.
     func renderer(_ renderer: SCNSceneRenderer, nodeFor anchor: ARAnchor) -> SCNNode? {
     let node = SCNNode()
     
     return node
     }
     */
    
    func session(_ session: ARSession, didFailWithError error: Error) {
        // Present an error message to the user
        
    }
    
    func sessionWasInterrupted(_ session: ARSession) {
        // Inform the user that the session has been interrupted, for example, by presenting an overlay
        
    }
    
    func sessionInterruptionEnded(_ session: ARSession) {
        // Reset tracking and/or remove existing anchors if consistent tracking is required
        
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
